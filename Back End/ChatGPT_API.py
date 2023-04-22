import openai
import env

openai.api_key = env.OPEN_AI_KEY
print(openai.Model.list())
