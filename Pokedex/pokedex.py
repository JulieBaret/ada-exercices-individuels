import json

file_handler = open("data.json", "r")
file = file_handler.read()
file_json = json.loads(file)
print(len(file_json["pokemon"]))

poke_list = file_json["pokemon"]

filter_on_weight = filter(lambda p: float(p["weight"].split()[0]) > 10, poke_list)
heavy_poke_list = list(filter_on_weight)

heavy_poke_list.sort(key=lambda p:float(p["weight"].split()[0]))
for pokemon in heavy_poke_list:
    print(pokemon["name"], pokemon["weight"])