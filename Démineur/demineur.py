import random

def generateGrid(n):
  list = [[0 for x in range(n)] for x in range(n)]
  
  for i in range(len(list)) : 
      for j in range(len(list[i])) : 
        ranNum = random.randint(0, n-1)
        list[i][ranNum] = "X"
        print(list[i][j], end=" ")
      print()

generateGrid(10)