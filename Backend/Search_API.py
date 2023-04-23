import requests
import json
import env

# function uses ScaleSerp API to search for clothing
  # given name of an item to search for 3 possibilities
def search_item(item_name, gender, number_of_results):
  params = {
      'api_key': env.SEARCH_KEY,
      'search_type': 'shopping',
      'page': '1',
      'num': str(number_of_results),
      'max_page': '1',
      'location': 'Los Angeles,CA,California,USA',
      'gl': 'us',
      'q': item_name + gender
  }
  return requests.get('https://api.scaleserp.com/search', params)

# Takes in list of items and outputs dictionary of lists of items
def search_outfit(input_items, gend = 'unisex', num_results = 1):
  out = {}
  for item in input_items:
    out[item] = []
    result_data =  search_item(item, gend, num_results).json()
    for i in range(0,num_results,1):
      item_name =  ((result_data["shopping_results"])[i])["title"]
      item_price = ((result_data["shopping_results"])[i])["price_raw"]
      item_link =  ((result_data["shopping_results"])[i])["link"]
      item_image = ((result_data["shopping_results"])[i])["image"]
      out[item].append({'name':  item_name,
                        'price': item_price,
                        'link':  item_link,
                        'image': item_image})
      #(out[item])[i].view()
      #searches_left = (result_data["request_info"])["credits_remaining"]
      #print('\nSearches Left: ' + str(searches_left))
  return out

#input_items = [["hat", "shirt", "jeans"],["sunglasses","sandals"]]
#output_outfits = [search_outfit(input_items[0],num_results = 3),search_outfit(input_items[1],num_results = 3)]
#print(output_outfits)
# given name of an item to search for 3 possibilities


def search_all_outfits(outfit_lists, gend = 'unisex', num_results=1):
    outfit_data = []
    for outfit in outfit_lists:
        outfit_data.append(search_outfit(outfit, gend, num_results))

    return outfit_data

# input_items = [["hat", "shirt", "jeans"],["sunglasses","sandals"]]
# output_outfits = [search_outfit(input_items[0],3),search_outfit(input_items[1],3)]
# print(output_outfits)
