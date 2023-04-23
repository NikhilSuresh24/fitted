from flask import Flask, request

import ChatGPT_API
import Search_API
# Initializing flask app
app = Flask(__name__)
  
  
# Route for getting outfit data
@app.route('/get_outfits')
def get_outfits():
    loc = request.args.get('location')
    month = request.args.get('month')
    gender = request.args.get("fit")
    style = request.args.get("style")

    items = ChatGPT_API.get_outfit_items(loc, month, gender, style)
    outfit_info = Search_API.search_outfit(items,gend = gender)

    return outfit_info

      
# Running app
if __name__ == '__main__':
    app.run(debug=True, port=5000)