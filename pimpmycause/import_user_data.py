import json

with open('data.json', 'rb') as f:
    users_data = json.loads(f.read().decode('utf8'))

    for user in users_data:
        print(user)
