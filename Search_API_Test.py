import requests
import json

# output should be outfits listed in 5 strings
  # isBool, hat/cover, top_item1, top_item2, bottom (?=none), shoes
#clothing_items = input('ChatGPT Response: ').split(', ')
clothing_items = ['Broke', 'red hat', 'sweatervest', 'cowboy boots']

# check if user is broke
broke = False
if(clothing_items[0] == 'Broke'):
    broke = True

# function uses ScaleSerp API to search for clothing
  # given name of an item to search for 10 possibilities
def search_item(isBroke,item_num):
  params = {
      'api_key': '93194A5623F843C6ADE1B6DEE9125451',
      'search_type': 'shopping',
      'page': '1',
      'num': '10',
      'max_page': '1',
      'location': 'New York City',
      'q': clothing_items[item_num]
    }
  if(isBroke):
    params = {
      'api_key': '93194A5623F843C6ADE1B6DEE9125451',
      'search_type': 'shopping',
      'page': '1',
      'num': '10',
      'max_page': '1',
      'location': 'New York City',
      'q': clothing_items[item_num] + ' cheap'
    }
  return requests.get('https://api.scaleserp.com/search', params)

# Get name, price, and link of each item
item = 0
while (item < (len(clothing_items)-1)):
  item = item + 1
  item_data =  search_item(broke,item).json()
  for i in range(0,9,1):
    item_name =  ((item_data["shopping_results"])[i])["title"]
    item_price = ((item_data["shopping_results"])[i])["price_raw"]
    item_link =  ((item_data["shopping_results"])[i])["link"]
    print('\nName: ' + str(item_name))
    print('Price: ' + str(item_price))
    print('Link: '   + str(item_link))
  