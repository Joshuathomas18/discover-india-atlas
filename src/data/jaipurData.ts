import customsImg from "@/assets/customs.jpg";
import foodImg from "@/assets/food.jpg";
import monumentsImg from "@/assets/monuments.jpg";
import festivalsImg from "@/assets/festivals.jpg";
import historyImg from "@/assets/history.jpg";

export interface CulturalCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
}

export const jaipurData: CulturalCategory[] = [
  {
    id: "customs",
    title: "Customs & Traditions",
    description: "Rich heritage of Rajasthani customs and traditional practices",
    image: customsImg,
    details: "Jaipur embodies the essence of Rajasthani culture with its vibrant traditions. The city is known for its warm hospitality, colorful turbans, and traditional attire. Local customs include elaborate wedding ceremonies, puppet shows, and folk performances. The practice of 'Padharo Mhare Des' (Welcome to my land) reflects the welcoming spirit of Rajasthanis."
  },
  {
    id: "food",
    title: "Food & Cuisine",
    description: "Authentic Rajasthani flavors and royal culinary traditions",
    image: foodImg,
    details: "Jaipur's cuisine is a royal feast featuring Dal Baati Churma, Ghewar, Laal Maas, and Pyaaz Kachori. The city's street food scene is legendary with Mirchi Vada and Lassi. Influenced by Rajput and Marwari cultures, the food ranges from spicy vegetarian dishes to rich meat preparations, all cooked with aromatic spices and clarified butter."
  },
  {
    id: "monuments",
    title: "Monuments & Tourist Spots",
    description: "Majestic forts, palaces, and architectural marvels",
    image: monumentsImg,
    details: "Known as the Pink City, Jaipur houses UNESCO World Heritage Sites including Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. These architectural wonders showcase Indo-Islamic and Rajput styles. The Nahargarh Fort offers stunning sunset views, while Jal Mahal seems to float on Man Sagar Lake. Each monument tells tales of royal grandeur and strategic warfare."
  },
  {
    id: "festivals",
    title: "Festivals & Culture",
    description: "Colorful celebrations and cultural events throughout the year",
    image: festivalsImg,
    details: "Jaipur comes alive during festivals like Diwali, Teej, Gangaur, and the famous Jaipur Literature Festival. The Elephant Festival showcases decorated elephants, while Kite Festival fills the sky with colors. Traditional dance forms like Ghoomar and Kalbeliya are performed during celebrations. The city also hosts numerous music and craft festivals celebrating Rajasthani heritage."
  },
  {
    id: "history",
    title: "History & Trivia",
    description: "Ancient legacy and fascinating historical facts",
    image: historyImg,
    details: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India's first planned city based on Vastu Shastra and Shilpa Shastra. The city was painted pink in 1876 to welcome Prince of Wales. Jaipur forms the Golden Triangle tourist circuit with Delhi and Agra. The city is famous for its gemstones, textiles, and handicrafts. It served as the capital of the Kachwaha Rajput kingdom."
  }
];

export const chatbotResponses: Record<string, string> = {
  "jaipur famous": "Jaipur is famous for its magnificent forts and palaces, vibrant bazaars, traditional handicrafts, and being India's first planned city. It's called the Pink City due to its distinctive colored buildings.",
  "food": "Jaipur's cuisine includes Dal Baati Churma, Laal Maas, Ghewar, Pyaaz Kachori, and delicious street food like Mirchi Vada. Don't miss the famous Lassi!",
  "monuments": "Major monuments include Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal, and Nahargarh Fort. Each showcases stunning Rajput architecture.",
  "festivals": "Jaipur celebrates Diwali, Teej, Gangaur, Elephant Festival, Kite Festival, and hosts the world-famous Jaipur Literature Festival.",
  "shopping": "Jaipur is renowned for jewelry, textiles, blue pottery, block-printed fabrics, gemstones, and traditional handicrafts. Visit Johari Bazaar and Bapu Bazaar.",
  "history": "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India's first planned city. It was painted pink in 1876 to welcome the Prince of Wales.",
  "default": "I can tell you about Jaipur's food, monuments, festivals, history, and shopping. What would you like to know?"
};
