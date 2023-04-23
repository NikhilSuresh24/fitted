import re

import openai
import tiktoken


import env

openai.api_key = env.OPEN_AI_KEY
gpt_model = "gpt-3.5-turbo"


def num_tokens_from_messages(messages, model="gpt-3.5-turbo-0301"):
    # From https://platform.openai.com/docs/guides/chat/introduction
    """Returns the number of tokens used by a list of messages."""
    try:
        encoding = tiktoken.encoding_for_model(model)
    except KeyError:
        encoding = tiktoken.get_encoding("cl100k_base")

    num_tokens = 0
    for message in messages:
        # every message follows <im_start>{role/name}\n{content}<im_end>\n
        num_tokens += 4
        for key, value in message.items():
            num_tokens += len(encoding.encode(value))
            if key == "name":  # if there's a name, the role is omitted
                num_tokens += -1  # role is always required and always 1 token
    num_tokens += 2  # every reply is primed with <im_start>assistant
    return num_tokens


def get_outfits(loc, month, gender, style):
    main_query = "Recommend me three {style} {gender} outfits for visiting {loc} in {month}.".format(
        style=style, gender=gender, month=month, loc=loc)
    outfit_msgs = [{"role": "system", "content": "You will be recommending outfits for travel to different places worldwide based on season, style, and gender"},
                   {"role": "assistant", "content": "Sure, I can definitely help! Can you please provide me with the following information:\n\n- What is your preferred style?\n- What is your gender?\n- Which location are you planning to visit?\n- In which month are you planning to visit?"},
                   {"role": "user", "content": "Recommend me three quirky men outfits for visiting New York in August."},
                   {"role": "assistant", "content": "Sure, here are three quirky men's outfits for visiting New York in August:\n\n1. A graphic print short-sleeved button-up shirt, light-colored chinos, and white sneakers.\n2. A bold colored t-shirt, light-wash denim shorts, vibrant patterned socks, and black canvas high-top sneakers.\n3. A denim jacket, a colorful graphic t-shirt, slim-fit jeans, and white low-top sneakers."},
                   {"role": "user", "content": main_query}]
    # print("Main Query: {}".format(main_query))
    # print("Outfits Request uses {} tokens".format(
    #     num_tokens_from_messages(outfit_msgs, )))
    response = openai.ChatCompletion.create(
        model=gpt_model,
        messages=outfit_msgs
    )

    # model_output = response['choices'][0]['message']['content']
    # print("INTERMEDIATE: {}".format(model_output))
    return response['choices'][0]['message']['content']


def parse_gpt_response(res):
    outfits = re.split("\n\d\.", res)[1:]
    outfits_formatted = []
    for idx, outfit in enumerate(outfits):
        items = outfit.replace("and ", "").replace(
            "A ", "").split(".", 1)[0].strip().split(", ")
        outfits_formatted.append(items)

    # print(outfits_formatted)
    return outfits_formatted


def get_outfit_items(loc, month, gender, style):
    outfits = get_outfits(loc, month, gender, style)
    items = parse_gpt_response(outfits)

    return items


if __name__ == "__main__":
    items = get_outfit_items("Moscow", "December", "men", "classy")
    # print(items)

# ["Sure, here are three quirky men's outfits for visiting New York in August:\n", ' A graphic print short-sleeved button-up shirt, light-colored chinos, and white sneakers./', ' A bold colored t-shirt, light-wash denim shorts, vibrant patterned socks, and black canvas high-top sneakers. /', ' A denim jacket, a colorful graphic t-shirt, slim-fit jeans, and white low-top sneakers. /']
