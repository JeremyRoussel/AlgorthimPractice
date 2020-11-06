# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice
# in the array, and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true

# Example 2:

# Input: [1,2,3,4]
# Output: false

# Example 3:

# Input: [1,1,1,3,3,4,3,2,4,2]
# Output: true

def containsDuplicate(nums):

    tracker = set()
    response = False
    for i in range(len(nums)):
        if (nums[i] in tracker):
            response = True
        else:
            tracker.add(nums[i])
            
    return response


# ********** Tests *************
A = [1, 2, 3, 1]
B = [1 , 2, 3, 4]
C = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
D = [6, 3, 8, 1, 7, 2, 9, 0, 4, 5]
E = [12, 17, 22, -5, -15, 0, 60, 12, 23]

print( containsDuplicate(A) )
print( containsDuplicate(B) )
print( containsDuplicate(C) )
print( containsDuplicate(D) )
print( containsDuplicate(E) )
