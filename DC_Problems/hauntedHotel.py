# You go to stay at a hotel, but discover that some of the rooms are haunted!
# Each of the rooms has a different cost, and some of them are free, but there's a rumour 
# that all the free rooms are haunted! Since you've played too much Phasmophobia, you
# refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

# Given the variable matrix, a rectangular matrix of integers, where each value represents the cost of 
# the room, your task is to return the total sum of all rooms that are suitable to stay in 
# (ie: add up all the values that don't appear in a column below a 0).

# Example

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]

# the output should be matrixElementsSum(matrix) = 9.
# 1 + 5 + 1 + 2 = 9.


matrix2 = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]

# the output should be matrixElementsSum(matrix2) = 9.

# Note that the free room in the final column makes the full column unsuitable for bots
# (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

def matrixElementsSum(matrix):
    
    sum = 0
    rows = len(matrix)
    columns = len(matrix[0])
    
    for i in range(0, rows):
        for j in range(0, columns):
            if (matrix[i][j] == 0 and i < (rows-1)):
                matrix[i+1][j] = 0
            sum += matrix[i][j]
    
    return sum


# ************* Tests ***************

matrix3 =  [[1,1,1], 
            [2,2,2], 
            [3,3,3]]

matrix4 =  [[1], 
            [5], 
            [0], 
            [2]]

matrix5 =  [[4,0,1], 
            [10,7,0], 
            [0,0,0], 
            [9,1,2]]

print( matrixElementsSum( matrix ))
print( matrixElementsSum( matrix2 ))
print( matrixElementsSum( matrix3 ))
print( matrixElementsSum( matrix4 ))
print( matrixElementsSum( matrix5 ))