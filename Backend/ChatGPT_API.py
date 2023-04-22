import openai
import env

openai.api_key = env.OPEN_AI_KEY

response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Where was the 2020 world series played?"}
    ]
)

print(response)
