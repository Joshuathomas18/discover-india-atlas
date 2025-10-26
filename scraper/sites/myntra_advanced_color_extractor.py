#!/usr/bin/env python3
"""
Myntra Advanced Color Extractor
Advanced color/variant extraction using JSON parsing and DOM swatch clicking
"""

import json
import time
import re
import logging
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("myntra_color_extractor")

def find_json_objects_from_script_text(text):
    """Extract JSON objects from script text using crude but robust heuristics."""
    objs = []
    # quick attempt: find {...} blocks and try to json.loads them
    # This is permissive — may capture many objects, filter later.
    # We use regex to find top-level {...} or [...] chunks.
    patterns = [
        r'({[\s\S]*?})',   # top-level object
        r'(\[[\s\S]*?\])'  # top-level array
    ]
    for pat in patterns:
        for m in re.finditer(pat, text):
            s = m.group(1)
            # skip extremely large strings that are unlikely JSON (or try anyway)
            if len(s) < 1000000:
                try:
                    obj = json.loads(s)
                    objs.append(obj)
                except Exception:
                    # try minor cleanup: replace \n and stray JS terms
                    try:
                        cleaned = s.encode('utf-8', errors='ignore').decode('utf-8', errors='ignore')
                        obj = json.loads(cleaned)
                        objs.append(obj)
                    except Exception:
                        pass
    return objs

def deep_search_for_keys(obj, key_terms):
    """Recursively walk object and extract nodes that contain any key terms in their keys or string values."""
    found = []

    def walk(o, path=""):
        if isinstance(o, dict):
            for k, v in o.items():
                lowk = str(k).lower()
                if any(term in lowk for term in key_terms):
                    found.append((path + "/" + str(k), v))
                # if value is string and contains a key term
                if isinstance(v, str) and any(term in v.lower() for term in key_terms):
                    found.append((path + "/" + str(k), v))
                walk(v, path + "/" + str(k))
        elif isinstance(o, list):
            for i, item in enumerate(o):
                walk(item, f"{path}[{i}]")
        else:
            return

    walk(obj)
    return found

def extract_colors_from_next_data(soup):
    """Try to get colors/variants from __NEXT_DATA__ (Next.js)."""
    script = soup.find("script", id="__NEXT_DATA__")
    if not script:
        return None
    try:
        obj = json.loads(script.string)
    except Exception as e:
        log.warning("Could not parse __NEXT_DATA__: %s", e)
        return None

    # heuristics: search for 'variants' / 'color' keys
    key_terms = ["variant", "variants", "color", "swatch", "sku", "product"]
    hits = deep_search_for_keys(obj, key_terms)
    # filter hits to reasonable structures
    results = []
    for path, node in hits:
        # node could be dict or list
        if isinstance(node, (list, dict)):
            # capture candidate nodes
            results.append({"path": path, "node": node})
    return results if results else None

def extract_colors_from_ld_json(soup):
    """Check application/ld+json blocks for Product -> color"""
    found = []
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            block = json.loads(script.string)
        except Exception:
            continue
        # block might be dict or list
        blocks = block if isinstance(block, list) else [block]
        for b in blocks:
            if isinstance(b, dict) and b.get("@type", "").lower().startswith("product"):
                color = b.get("color")
                if color:
                    found.append({"source": "ld+json", "color": color, "data": b})
    return found or None

def extract_colors_by_script_scan(soup):
    """Scan all <script> tags for JSON-like text and attempt to parse objects containing color/variant."""
    candidates = []
    for script in soup.find_all("script"):
        if not script.string:
            continue
        text = script.string.strip()
        # quick filter: only examine script blocks that appear to contain JSON
        if len(text) < 100 or ("{" not in text and "[" not in text):
            continue
        objs = find_json_objects_from_script_text(text)
        for o in objs:
            hits = deep_search_for_keys(o, ["variant", "variants", "color", "swatch", "sku", "images"])
            if hits:
                candidates.append({"script_excerpt": text[:200], "obj": o, "hits": hits})
    return candidates or None

def get_color_variants(driver, url, click_each_swatch=True):
    """Main function: returns structured color/variant mapping for a Myntra product URL.
       - click_each_swatch: if True, will click DOM swatches to gather color-specific images.
    """
    log.info("Loading product page: %s", url)
    driver.get(url)
    wait = WebDriverWait(driver, 15)

    # Wait for a stable sign of product page
    try:
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "h1, .pdp-title, .pdp-name, #__next")))
    except Exception:
        log.warning("Main container not found quickly; proceeding anyway after small delay.")
        time.sleep(2)

    soup = BeautifulSoup(driver.page_source, "lxml")
    collected = {
        "url": url,
        "colors": [],
        "variants": [],  # entries: {color, sku, variant_id, images}
        "default_images": []
    }

    # default images (gallery)
    try:
        imgs = []
        # common selectors: product gallery img tags or background-image in container
        for img in soup.select("img"):
            src = img.get("src") or img.get("data-src")
            if src and "assets.myntassets.com" in src:
                imgs.append(src)
        # fallback find styled background images
        for el in soup.select("[style*='background-image']"):
            style = el.get("style") or ""
            if "url(" in style:
                url_part = style.split("url(")[1].split(")")[0].strip(' "\'')
                imgs.append(url_part)
        collected["default_images"] = list(dict.fromkeys(imgs))
    except Exception as e:
        log.debug("Default images extraction issue: %s", e)

    # 1) Try __NEXT_DATA__
    nd_results = extract_colors_from_next_data(soup)
    if nd_results:
        log.info("Found candidate variant nodes inside __NEXT_DATA__ (%d candidates).", len(nd_results))
        # heuristically parse these results into color/variant/image mappings
        for cand in nd_results:
            node = cand["node"]
            # node may be a list of variant dicts or something else; attempt to normalize
            if isinstance(node, list):
                for item in node:
                    if not isinstance(item, dict):
                        continue
                    color = item.get("color") or item.get("colour") or item.get("displayColor") or item.get("name")
                    sku = item.get("sku") or item.get("id") or item.get("variantId")
                    images = item.get("images") or item.get("image") or item.get("media") or []
                    # normalize image urls (if nested)
                    img_list = []
                    if isinstance(images, list):
                        for im in images:
                            if isinstance(im, str):
                                img_list.append(im)
                            elif isinstance(im, dict):
                                # try common keys
                                for k in ("url", "src", "imageUrl"):
                                    if k in im:
                                        img_list.append(im[k])
                    if color or sku or img_list:
                        collected["variants"].append({"color": color, "sku": sku, "images": img_list})
                        if color:
                            collected["colors"].append(color)
    
    # 2) Try LD+JSON
    ld = extract_colors_from_ld_json(soup)
    if ld:
        log.info("Found color info in ld+json")
        for entry in ld:
            c = entry.get("color")
            if isinstance(c, list):
                for cc in c:
                    if cc not in collected["colors"]:
                        collected["colors"].append(cc)
            elif isinstance(c, str) and c not in collected["colors"]:
                collected["colors"].append(c)

    # 3) Try scanning other scripts
    script_cands = extract_colors_by_script_scan(soup)
    if script_cands:
        log.info("Found %d script-based candidate JSON objects with variant-like keys", len(script_cands))
        for cand in script_cands:
            o = cand["obj"]
            # try to find obvious variant arrays
            if isinstance(o, dict):
                for k in ("variants", "variantList", "productVariants", "skus", "articles"):
                    if k in o and isinstance(o[k], list):
                        for item in o[k]:
                            if isinstance(item, dict):
                                color = item.get("color") or item.get("colour") or item.get("displayColor") or item.get("name")
                                sku = item.get("sku") or item.get("id") or item.get("variantId")
                                images = item.get("images") or item.get("image") or item.get("media") or []
                                collected["variants"].append({"color": color, "sku": sku, "images": images})
                                if color and color not in collected["colors"]:
                                    collected["colors"].append(color)

    # 4) Myntra-specific: Extract from ul.colour-listItemContainer
    try:
        # Use BeautifulSoup to find the color container
        color_container = soup.find("ul", {"class": "colour-listItemContainer"})
        if color_container:
            log.info("Found colour-listItemContainer")
            items = color_container.find_all("a")
            log.info("Found %d color variant links", len(items))
            
            for item in items:
                try:
                    img = item.find("img")
                    if img and img.get("alt"):
                        color_name = img["alt"].strip()
                        color_url = item.get("href")
                        
                        # Make URL absolute if it's relative
                        if color_url and not color_url.startswith("http"):
                            color_url = "https://www.myntra.com" + color_url
                        
                        thumbnail = img.get("src") or img.get("data-src")
                        
                        # Add to colors list
                        if color_name not in collected["colors"]:
                            collected["colors"].append(color_name)
                        
                        # Add to variants list
                        collected["variants"].append({
                            "color": color_name,
                            "url": color_url,
                            "thumbnail": thumbnail
                        })
                        
                        log.info("Found variant: %s -> %s", color_name, color_url)
                        
                except Exception as e:
                    log.debug("Error extracting variant from item: %s", e)
                    continue
        else:
            log.info("No colour-listItemContainer found")
    except Exception as e:
        log.debug("Error finding colour-listItemContainer: %s", e)

    # 5) Fallback: DOM swatches (click each to capture images if requested)
    swatch_selectors = [
        ".colour-listItem", ".colour-listItemContainer .colour-listItem", ".swatch", ".colour-swatch", ".swatch-item"
    ]
    swatches = []
    for sel in swatch_selectors:
        els = driver.find_elements(By.CSS_SELECTOR, sel)
        if els:
            swatches = els
            break

    if swatches:
        log.info("Found %d swatch DOM elements using selector(s).", len(swatches))
        for i, sw in enumerate(swatches):
            try:
                title = sw.get_attribute("title") or sw.get_attribute("alt") or sw.get_attribute("data-color") or sw.get_attribute("data-variant")
                color_label = title.strip() if title else f"variant_{i}"
                # click swatch to load images for that color
                if click_each_swatch:
                    try:
                        driver.execute_script("arguments[0].scrollIntoView(true);", sw)
                        time.sleep(0.2)
                        sw.click()
                        # wait for gallery to update; simple sleep or wait for img src change
                        time.sleep(0.6)
                    except Exception as e:
                        log.debug("click failed: %s", e)
                # gather gallery images after click
                after_soup = BeautifulSoup(driver.page_source, "lxml")
                imgs = []
                for img in after_soup.select("img"):
                    src = img.get("src") or img.get("data-src")
                    if src and "assets.myntassets.com" in src:
                        imgs.append(src)
                # background-image fallback
                for el in after_soup.select("[style*='background-image']"):
                    style = el.get("style") or ""
                    if "url(" in style:
                        url_part = style.split("url(")[1].split(")")[0].strip(' "\'')
                        imgs.append(url_part)
                imgs = list(dict.fromkeys(imgs))
                collected["variants"].append({"color": color_label, "images": imgs})
                if color_label not in collected["colors"]:
                    collected["colors"].append(color_label)
            except Exception as e:
                log.debug("swatch iteration error: %s", e)

    # cleanup dedupe
    collected["colors"] = [c for c in dict.fromkeys(collected["colors"]) if c]
    # ensure variants have images and normalized entries
    normalized_variants = []
    for v in collected["variants"]:
        if isinstance(v, dict):
            normalized_variants.append({
                "color": v.get("color") or v.get("color_label") or None,
                "sku": v.get("sku"),
                "images": v.get("images") if isinstance(v.get("images"), list) else []
            })
    collected["variants"] = normalized_variants

    return collected

# ----------------------------
# Example usage (run locally)
# ----------------------------
if __name__ == "__main__":
    opts = webdriver.ChromeOptions()
    # headless if desired
    # opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--disable-gpu")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=opts)

    test_url = "https://www.myntra.com/dresses/baesd/baesd-girls-floral-flutter-sleeve-net-fit--flare-dress/29524964/buy"
    try:
        res = get_color_variants(driver, test_url, click_each_swatch=True)
        print(json.dumps(res, indent=2))
    finally:
        driver.quit()
