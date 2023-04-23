import requests
import json
import env
#import Chat_Search_Interface

class ClothingListing:
  def __init__(self, name = '', price = '', link = ''):
    self.name  = name
    self.price = price
    self.link  = link
  def view(self):
    print("Name: ",  self.name)
    print("Price: ", self.price)
    print("Link: ",  self.link)

input_items = ["hat", "shirt"]
num_results = 2
out = {}

# function uses ScaleSerp API to search for clothing
  # given name of an item to search for 3 possibilities
def search_item(item_name, number_of_results):
  params = {
      'api_key': env.SEARCH_KEY,
      'search_type': 'shopping',
      'page': '1',
      'num': str(number_of_results),
      'max_page': '1',
      'location': 'Los Angeles,CA,USA',
      'gl': 'us',
      'q': item_name
  }
  return requests.get('https://api.scaleserp.com/search', params)

for item in input_items:
  out[item] = []
  result_data =  search_item(item,num_results).json()
  for i in range(0,num_results-1,1):
    item_name =  ((result_data["shopping_results"])[i])["title"]
    item_price = ((result_data["shopping_results"])[i])["price_raw"]
    item_link =  ((result_data["shopping_results"])[i])["link"]
    out[item].append(ClothingListing(item_name,item_price,item_link))
    (out[item])[i].view()
  searches_left = (result_data["request_info"])["credits_remaining"]
  print('Searches Left: ' + str(searches_left) + '\n')  