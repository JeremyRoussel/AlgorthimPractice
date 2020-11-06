# Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
# -- The digits are stored such that the most significant digit is at the head of the list, 
# and each element in the array contains a single digit.
# -- You may assume the integer does not contain any leading zero, except the number 0 itself.

# Example 1:

A = [1,2,3]
# Output: [1,2,4]
# Explanation: The array represents the integer 123.

# Example 2:

B = [4,3,2,1]
# Output: [4,3,2,2]
# Explanation: The array represents the integer 4321.

# Example 3:

C = [0]
# Output: [1]

def plusOne(digits):

    for i in range(len(digits)-1, -1, -1):
        digits[i] = digits[i] + 1
        
        if digits[i] != 10:
            return digits
        elif digits[i] == 10:
            digits[i] = 0
            if i == 0:
                digits.insert(0, 1)
    
    return digits

# ********** Tests *************
D = [6, 7, 7, 5, 6, 5, 4, 2, 2, 0, 5, 0, 1, 9, 6, 5, 4, 1, 6, 9, 5, 5, 1, 7, 2, 1, 7, 2, 2, 9, 1, 7, 9, 7, 9, 0, 6, 8, 3, 2, 0, 7, 0, 4, 3, 8, 9, 2, 1, 1, 9, 7, 4, 9, 5, 5, 2, 5, 2, 2, 4, 5, 6, 5, 9, 6, 6, 5, 8, 9, 7, 6, 4, 1, 3, 3, 1, 7, 9, 0, 4, 4, 8, 3, 1, 7, 9, 1, 8, 1, 5, 8, 1, 8, 0, 4, 9, 1, 7, 3, 1, 5, 3, 8, 9, 6, 5, 7, 3, 8, 8, 2, 0, 2, 5, 9, 2, 7, 1, 5, 1, 9, 4, 8, 9, 5, 6, 8, 8, 1, 8, 5, 1, 0, 4, 0, 8, 9, 2, 0, 5, 6, 6, 9, 1, 3, 5, 8, 7, 4, 3, 7, 0, 3, 8, 2, 0, 8, 6, 1, 7, 4, 5, 4, 1, 5, 0, 8, 9, 7, 9, 8, 3, 7, 2, 3, 2, 7, 1, 9, 0, 6, 7, 0, 6, 5, 9, 3, 2, 3, 1, 3, 8, 7, 8, 0, 9, 9, 9, 1, 7, 9, 3, 5, 9, 1, 5, 5, 8, 1, 2, 3, 9, 7, 7, 4, 4, 9, 3, 7, 8, 3, 4, 6, 6, 3, 0, 9, 9, 7, 9, 3, 8, 0, 2, 0, 3, 4, 7, 4, 8, 4, 9, 0, 3, 2, 0, 8, 1, 4, 5, 6, 5, 4, 3, 2, 7, 6, 8, 5, 8, 4, 8, 0, 2, 2, 9, 9, 8, 0, 4, 8, 5, 3, 8, 8, 1, 2, 7, 0, 7, 8, 5, 6, 2, 1, 6, 1, 3, 7, 7, 1, 6, 7, 7, 4, 5, 8, 5, 5, 5, 1, 9, 3, 6, 8, 7, 2, 6, 0, 4, 2, 9, 9, 7, 9, 6, 6, 9, 7, 5, 0, 9, 8, 5, 4, 0, 4, 0, 0, 5, 8, 4, 7, 0, 8, 0, 7, 2, 0, 7, 5, 2, 6, 0, 2, 0, 6, 8, 9, 7, 8, 4, 6, 5, 0, 3, 5, 7, 2, 9, 3, 5, 8, 5, 4, 2, 9, 9, 5, 2, 5, 7, 5, 7, 4, 2, 0, 9, 3, 7, 1, 2, 8, 0, 9, 2, 1, 0, 0, 6, 7, 9, 5, 3, 1, 4, 6, 6, 2, 6, 1, 4, 1, 9, 2, 6, 7, 9, 9, 4, 7, 2, 6, 1, 3, 0, 2, 7, 5, 0, 0, 7, 7, 2, 5, 2, 0, 7, 2, 4, 5, 6, 6, 7, 6, 7, 5, 1, 4, 4, 2, 6, 5, 0, 4, 0, 9, 1, 6, 1, 3, 6, 7, 6, 0, 5, 0, 5, 9, 0, 2, 4, 2, 3, 9, 8, 1, 5, 2, 2, 9, 6, 4, 7, 7, 1, 1, 8, 4, 3, 8, 3, 7, 7, 4, 7, 0, 3, 2, 6, 8, 4, 8, 6, 8, 1, 1, 7, 8]
E = [9, 9, 9, 9, 9, 9]

print( plusOne(A) )
print( plusOne(B) )
print( plusOne(C) )
print( plusOne(D) )
print( plusOne(E) )