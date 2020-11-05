# Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

# A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
# You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

# See picture in interesting.jpeg

# Example

# For n = 2, the output should be
# shapeArea(n) = 5;
# For n = 3, the output should be
# shapeArea(n) = 13.


def shapeArea(n):

    sum = 1

    for i in range(0, n):
        sum += 4*(i)
    
    return sum

print(f'shapeArea(1) = 1 : {(shapeArea(1) == 1)}')
print(f'shapeArea(2) = 5 : {(shapeArea(2) == 5)}')
print(f'shapeArea(3) = 13 : {(shapeArea(3) == 13)}')
print(f'shapeArea(4) = 25 : {(shapeArea(4) == 25)}')
print(f'shapeArea(999) = 1994005 : {(shapeArea(999) == 1994005)}')
print(f'shapeArea(100) = 19801 : {(shapeArea(100) == 19801)}')

