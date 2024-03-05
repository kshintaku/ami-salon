import requests
import os
import json
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

#This function will check if there is a new post(shortcode) or if all old display urls are still working
def check_links(old_data, new_data):
    passed = True
    obj = json.loads(old_data)
    new_obj = json.loads(new_data)
    for i in range(len(obj["edge_owner_to_timeline_media"]["edges"])):
        if obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["shortcode"] == new_obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["shortcode"]:
            response = requests.request("GET", obj["edge_owner_to_timeline_media"]["edges"][i]["node"]["display_url"])
            if response.status_code != 200:
                print(f"Link #{i+1} needs to be updated")
                passed = False
        else:
            return False

    return passed

# Getting information from instagram via rapidapi (limit 5 per day)
url = "https://instagramdimashirokovv1.p.rapidapi.com/user/hairbyami2021"

headers = {
    "x-rapidapi-key": os.getenv('RAPIDAPI_KEY'),
    "x-rapidapi-host": "InstagramdimashirokovV1.p.rapidapi.com",
}

response = requests.request("GET", url, headers=headers)
if response.status_code != 200:
    print(f"Request failed with code: {response.status_code}.")
    exit()

# Let's create a little message to know whether something has changed
with open("data.txt", "r") as file:
    data = file.read()
    if check_links(data, response.text):
        print("All old links still work")
        exit()
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

