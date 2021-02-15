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

# Let's create a little message to know whether something has changed
with open("data.txt", "r") as file:
    data = file.read()
    if data == response.text:
        print("IG has not been updated")
    else:
        print("IG needs to be updated!")

with open("data.txt", "w") as file:
    file.write(response.text)
    data = response.text

# Time to create our custom JSON with only the shortcode and link to picture
obj = json.loads(data)
media = []
for i in range(len(obj["edge_owner_to_timeline_media"]["edges"])):
    media.append({"shortcode": obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["shortcode"], 
    "display_url": obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["display_url"]})

json_out = json.dumps({"hairbyami2021": media})
with open("ig_data.json", "w") as file:
    file.write(json_out)