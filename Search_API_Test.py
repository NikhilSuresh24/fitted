import requests
import json

# output should be outfits listed in 5 strings
  # isBool, hat/cover, top_item1, top_item2, bottom (?=none), shoes
#clothing_items = input('ChatGPT Response: ').split(', ')
clothing_items = ['Broke', 'red hat', 'sweatervest', 'cowboy boots']

# check if user is broke
broke = False
print('\n' + clothing_items[0])
if(clothing_items[0] == 'Broke'):
    broke = True
print(clothing_items)

def search_item(isBroke,item_num):
  params = {
      'api_key': '93194A5623F843C6ADE1B6DEE9125451',
      'search_type': 'shopping',
      'page': '1',
      'num': '10',
      'max_page': '1',
      'q': clothing_items[item_num]
    }
  if(isBroke):
    params = {
      'api_key': '93194A5623F843C6ADE1B6DEE9125451',
      'search_type': 'shopping',
      'page': '1',
      'num': '10',
      'max_page': '1',
      'q': clothing_items[item_num] + ' cheap'
    }
  return requests.get('https://api.scaleserp.com/search', params)
item = 0
print('\n' + str(len(clothing_items)))
while (item < (len(clothing_items)-1)):
  item = item + 1
  item_data = search_item(broke,item).json()
  print(json.dumps(item_data))