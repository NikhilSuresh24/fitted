from flask import Flask, request

<<<<<<< HEAD
from .ChatGPT_API import get_outfit_items
from .Search_API import search_outfit
=======
import ChatGPT_API
import Search_API
>>>>>>> fc56709 (started frontend)
# Initializing flask app
app = Flask(__name__)
  
  
# Route for getting outfit data
@app.route('/get_outfits')
def get_outfits():
    loc = request.args.get('location')
    month = request.args.get('month')
    gender = request.args.get("fit")
    style = request.args.get("style")

<<<<<<< HEAD
    items = get_outfit_items(loc, month, gender, style)
    outfit_info = search_outfit(items)
=======
    items = ChatGPT_API.get_outfit_items(loc, month, gender, style)
    outfit_info = Search_API.todo_func(items)
>>>>>>> fc56709 (started frontend)

    return outfit_info

      
# Running app
if __name__ == '__main__':
    app.run(debug=True, port=5000)