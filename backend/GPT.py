from openai import OpenAI
import sys

client = OpenAI(
    api_key='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'
)

def get_openai_response(prompt):
    messages = [
        {"role": "system", "content": "You are a Digital Marketing Expert, you need to write an article about the following with HTML tags so that then we can have different headings. The first heading should be an h1 tag. you can also add images where you think it is appropriate"},
        {"role": "user", "content": prompt}
    ]
    chat_completion = client.chat.completions.create(messages=messages, model="gpt-3.5-turbo")
    return chat_completion.choices[0].message.content

if __name__ == '__main__':
    if len(sys.argv) > 1:
        prompt = sys.argv[1]
        response = get_openai_response(prompt)
        print(response)
    else:
        print("No prompt provided")