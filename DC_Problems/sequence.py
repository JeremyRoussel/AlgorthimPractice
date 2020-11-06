# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
# increasing sequence by removing no more than one element from the array.

# Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
# A sequence containing only one element is also considered to be strictly increasing.

# Example

# For sequence = [1, 3, 2, 1], the output should be

#        almostIncreasingSequence(sequence) = false.

# As there is no one element in this array that can be removed in order to get a strictly increasing sequence.

# For sequence = [1, 3, 2], the output should be

#    almostIncreasingSequence(sequence) = true.

# You can remove 3 from the array to get the strictly increasing sequence [1, 2].
# Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

# Hint: first define another function that tests if a sequence is strictly increasing without removing an element

def almostIncreasingSequence(s):

    test = True

    for i in range(0, len(s)-1):
        if (s[i] >= s[i+1]):
            a = s.copy()
            a.pop(i)
            b = s.copy()
            b.pop(i+1)

            testA = testIncreasing(a)
            testB = testIncreasing(b)

            if not (testA or testB):
                test = False

    return test


def testIncreasing(s):

    test = True

    for i in range(0, len(s)-1):
        if (s[i] >= s[i+1]):
            test = False

    return test

print( almostIncreasingSequence( [1, 3, 2, 1] ) )
print( almostIncreasingSequence( [1, 2, 1, 2] ) )
print( almostIncreasingSequence( [1, 1, 2, 3, 4, 4] ) )
print( almostIncreasingSequence( [10, 1, 2, 3, 4, 5] ) )
print( almostIncreasingSequence( [40, 50, 60, 10, 20, 30]) )
print( almostIncreasingSequence( [1, 1] ) )
print( almostIncreasingSequence( [10, 1, 2, 3, 4, 5, 6, 1] ) )
print( almostIncreasingSequence( [1, 2, 3, 4, 99, 5, 6] ) )
