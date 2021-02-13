import requests
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

url = "https://instagramdimashirokovv1.p.rapidapi.com/user/hairbyami2021"

headers = {
    "x-rapidapi-key": os.getenv('RAPIDAPI_KEY'),
    "x-rapidapi-host": "InstagramdimashirokovV1.p.rapidapi.com",
}

response = requests.request("GET", url, headers=headers)
with open("data.txt", "w") as file:
    file.write(response.text)

print(response.text)