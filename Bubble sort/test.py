my_list = [9, -5, 1, 8, -3, 7, 7, 89, 192]


##classer un tableau du plus petit au plus grand élément
def sort_my_list(list):
    operations = 0
    stop = len(list)
    for i in range(stop-1):
        for j in range(stop-1):
            operations+=1
            if list[j]>list[j+1] :
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
    return(list, operations)

sorted_list, nb_operations = sort_my_list(my_list)
print(f"La liste classée : {sorted_list}")
print(f"Le nombre d'opérations : {nb_operations}")

##classer un tableau du plus grand au plus petit
def unsort_my_list(list):
    stop = len(list)
    for i in range(stop):
        for j in range(stop-1):
            if(list[j]<list[j+1]):
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
    return(list)

unsorted_list = unsort_my_list(my_list)
print(f"Liste classée du plus grand au plus petit : {unsorted_list}")


##parcourir mon tableau de droite à gauche
my_list1 = [9, -5, 1, 8, -3, 7, 7, 89, 192]

def from_right_to_left(list):
    start = len(list)
    for i in range(start, 0, -1):
        for j in range(start-1, 0, -1):
            if(list[j-1] > list[j]):
                temp = list[j]
                list[j] = list[j-1]
                list[j-1] = temp
    return list

my_list_from_right_to_left = from_right_to_left(my_list1)
print(f"La liste classée parcourue de droite à gauche : {my_list_from_right_to_left}")


##return l'élément le plus élevé d'un tableau et son index
def max_my_list(list):
    element_max = list[0]
    index_max = 0
    for i in range(1, len(list)):
        if(list[i]>element_max):
            element_max = list[i]
            index_max = i
    return element_max, index_max

my_max, my_index = max_my_list(my_list)
print(f"L'élement max de la liste : {my_max}")
print(f"L'index de cet élément max : {my_index}")