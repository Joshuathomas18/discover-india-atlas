/**
 * Convert underscore-separated keys to readable titles
 * e.g., "how_to_reach" -> "How To Reach"
 */
export function formatTabName(key: string): string {
  return key
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

