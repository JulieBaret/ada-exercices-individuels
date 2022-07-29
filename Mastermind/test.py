import random

colors = ['yellow', 'blue', 'red', 'green']

def generate_secret(max_range):
    return random.choices(colors, k = max_range)
# print(generate_secret(2))

def user_input():
    response = input('Choose two colors :')
    response_list = response.strip().split(" ")
    return response_list
# print(user_input())

def control_user_input(arr1, arr2):
    for elements in arr1:
        if elements not in arr2:
            return False
    return True
print(control_user_input(user_input(), colors))

def game_check(arr1, arr2):
    color_ok = 0
    color_and_position_ok = 0
    for elements, index in enumerate(arr1):
        if index == arr2[index]:
            color_and_position_ok += 1
        elif elements in arr2:
            color_ok += 1
    return color_and_position_ok, color_ok