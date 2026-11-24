from http.server import BaseHTTPRequestHandler
import urllib.parse
from curl_cffi import requests

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        USER_ID = "7097214"
        API_KEY = "55d5ce3f94fbdac8b1e764857ddb789dc2148fb4c3ca5ca65cfac66db8cdae31a30eaa16045b6c6e3a5de492bc09a8d49d736034abb8aa9fd153b346fe2f7e72"
        TAGS = "murder_drones -video -futanari female_only -trans"

        base = "https://rule34.xxx" + "/index.php?page=dapi&s=post&q=index&json=1&limit=100"
        api_url = (
            f"{base}&tags={urllib.parse.quote(TAGS)}"
            f"&user_id={USER_ID}&api_key={API_KEY.strip()}"
        )

        try:
            resp = requests.get(api_url, impersonate="chrome", timeout=10)
            self.send_response(resp.status_code)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(resp.content)
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(f'{{"error": "{e}"}}'.encode("utf-8"))
