import requests
from bs4 import BeautifulSoup
import pandas as pd


url = 'https://www.tripadvisor.in/Restaurants-g293913-Taipei.html'

user_agent = ({'User-Agent':
               'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
			AppleWebKit/537.36 (KHTML, like Gecko) \
			Chrome/90.0.4430.212 Safari/537.36',
               'Accept-Language': 'en-US, en;q=0.5'})


def get_page_contents(url):
    page = requests.get(url, headers=user_agent)
    return BeautifulSoup(page.text, 'html.parser')


soup = get_page_contents(url)

restaurants = []

for name in soup.findAll('div', {'class': 'RfBGI'}):
    restaurants.append(name.text.strip())

reviews1 = []
reviews2 = []

a=1

for review in soup.findAll('a', {'class': 'fnrKq'}):
    if a%2==1:
        reviews1.append(review.text.strip())
    elif a%2==0:
        reviews2.append(review.text.strip())
    a+=1
    
dict = {'reviews-1': reviews1, 'reviews-2': reviews2}
res = pd.DataFrame.from_dict(dict)
res.index= restaurants
res.head(30)
res.to_csv('Taipei.csv')