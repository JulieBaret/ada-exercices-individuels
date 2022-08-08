#Etape 1

def sum1(list):
    sum = 0
    for number in list:
        sum += number
    return sum

print(sum1([1,4,5,10,1]))

def sum1Bis(list):
    return sum(list)

print(sum1Bis([1,4,5,10,1]))

#Etape 2

def sum2(array, arrayLength):
    if arrayLength == 0:
        return 0
    else:
        return array[arrayLength-1] + sum2(array, arrayLength-1)
array = [1, 2, 3, 4, 5]
total = sum2(array, len(array))
print(total)

def sum2Bis(list):
    if (len(list) == 1):
        return list[0]
    else:
        list[0]+=list[1]
        list.pop(1)
        sum2Bis(list)
        return list[0]

print(sum2Bis([1, 2, 3, 4, 5, 5]))