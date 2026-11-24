export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const USER_ID = "7097214";
  const API_KEY = "55d5ce3f94fbdac8b1e764857ddb789dc2148fb4c3ca5ca65cfac66db8cdae31a30eaa16045b6c6e3a5de492bc09a8d49d736034abb8aa9fd153b346fe2f7e72";
  const TAGS = "murder_drones -video -futanari female_only -trans";

  const apiUrl = "https://rule34.xxx" + "/index.php?page=dapi&s=post&q=index&json=1&limit=100"
    + "&tags=" + encodeURIComponent(TAGS)
    + "&user_id=" + USER_ID
    + "&api_key=" + API_KEY.trim();

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json"
      }
    });
    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
