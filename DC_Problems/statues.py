# Given an array of statue sizes in a random order, how many additional statues
# would you need to arrange each statue so that each statue is only 1 unit taller than the previous one?

# All statues will have sizes between 0 and 20, and the given array will have a maximum length of 10.

# Example

# For the array of statues = [6, 2, 3, 8], the output should be
# numberStatues(statues) = 3.

# The completed set of statues needs the sizes 4, 5 and 7.

def numberStatues(statues):

    min = 21
    max = 0

    for i in range(0, len(statues)):

        if (statues[i] > max):
            max = statues[i]
        if (statues[i] < min):
            min = statues[i]
    
    return (max - min + 1 - len(statues))

print(( numberStatues( [6, 2, 3, 8]) ) )