from flask import Flask, request

from .ChatGPT_API import get_outfit_items
from .Search_API import search_outfit
# Initializing flask app
app = Flask(__name__)
  
  
# Route for getting outfit data
@app.route('/get_outfits')
def get_outfits():
    loc = request.args.get('location')
    month = request.args.get('month')
    gender = request.args.get("fit")
    style = request.args.get("style")

    items = get_outfit_items(loc, month, gender, style)
    outfit_info = search_outfit(items)

    return outfit_info

      
# Running app
if __name__ == '__main__':
    app.run(debug=True, port=5000)