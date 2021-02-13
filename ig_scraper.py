import requests
import os
import json
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Getting information from instagram via rapidapi (limit 5 per day)
url = "https://instagramdimashirokovv1.p.rapidapi.com/user/hairbyami2021"

headers = {
    "x-rapidapi-key": os.getenv('RAPIDAPI_KEY'),
    "x-rapidapi-host": "InstagramdimashirokovV1.p.rapidapi.com",
}

response = requests.request("GET", url, headers=headers)
with open("data.txt", "w") as file:
    file.write(response.text)

with open("data.txt", "r") as file:
    data = file.read()

obj = json.loads(data)
media = []
for i in range(len(obj["edge_owner_to_timeline_media"]["edges"])):
    media.append({"shortcode": obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["shortcode"], 
    "display_url": obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["display_url"]})

json_out = json.dumps({"hairbyami2021": media})
with open("ig_data.json", "w") as file:
    file.write(json_out)