export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const USER_ID = "7097214";
  const API_KEY = "СЮДА_ТОЛЬКО_128_СИМВОЛОВ_КЛЮЧА";
  const TAGS = "murder_drones -video -futanari female_only -trans";

  const base = "https://rule34.xxx" + "/index.php?page=dapi&s=post&q=index&json=1&limit=100";
  const apiUrl = base
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
