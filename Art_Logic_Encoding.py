# Dependencies used in program
import numpy as np
import math


# Create entry with None padding of the entered phrase
# If we send the phrase "A", we want to get back [None, None, None, "A"]
# If we send the phrase "FRED", we eant to get back ["D", "E", "R", "D"]
def padded_entry(phrase):

    returned_list = [None, None, None, None]

    for i, val in enumerate(list(phrase[:4])):
        returned_list[3-i] = val

    return returned_list


# Representation of characters in binary, no zero-padding applied
binaryDict = {chr(i): bin(i) for i in range(128)}
# Add entry for None
binaryDict[None] = '0b000000'


# Lookup for padded binary representation of the character
# If we ask for the binary of "A", we want to get back 01000001, not 1000001
# This function will add zero-padding to the binary dictionary lookup
# This version returns a list representation of the binary, each element contains a string of a numeral
def padded_response_list(character):

    value = binaryDict[character].split('b')[1]

    res = f"{'0'*(8-len(value))}"+value

    return list(res)


# This function takes the four lists of binary characters, and calculates the sum of the encoded phrase
# The following table shows the values we need to lookup the list element associated with the binary exponent

#     Power      |  32  |   31  |   30  |   29  |   28  |   27  |   26  |   25  |   24  |   23  |
#   List (0-3)   |  0   |   1   |   2   |   3   |   0   |   1   |   2   |   3   |   0   |   1   |
#   Item (0-7)   |  0   |   0   |   0   |   0   |   1   |   1   |   1   |   1   |   2   |   2   |

# Then the required lookup follows the following patterns
# List -> rem = (32 - i) % 4
# Item -> item = math.floor((32-i)/4)
# The selection will then have the indices of list[rem][item]

def encoded_num(list):

    sum = 0

    for i in np.arange(32, 0, -1):
        rem = (32-i)%4 
        item = math.floor((32-i)/4)
        selection = int(list[rem][item])*2

        # Handle the case of 0**0, which we require to be zero rather than 1
        if i > 1:
            sum += selection**(i-1)
        else:
            if selection != 0:
                sum += selection**(i-1)

        # print(f"i: {i}, rem: {rem}, item: {item}, selection: {selection}, sum: {sum}")

    return sum



# Ask for the phrase to encode
entry_full = input('Enter a phrase to encode: ')

#Take the first four letters to encode, store padded entry
entry = padded_entry(entry_full[:4])

# Get the mapped list of the entry
mapped_list = [padded_response_list(i) for i in entry]

#Print the encoded number
print(encoded_num(mapped_list))


#####################################################################
# Older version using strings

# Lookup for padded binary representation of the character
# If we ask for the binary of "A", we want to get back 01000001, not 1000001
# This function will add zero-padding to the binary dictionary lookup
# This version returns a string representation of the binary
# def padded_response(character):

#     value = binaryDict[character].split('b')[1]

#     res = f"{'0'*(8-len(value))}"+value

#     return res


# If given a list of strings that represent the unencoded binary values of the characters,
# this function returns the encoded, concatenated string

# We find the required element in the joined string by the following table

#  Unencoded  |  0   |   1   |   2   |   3    |   4    |   5    |   6    |   7    |   8   |   9   |
#   Encoded   |  0   |   4   |   8   |   12   |   16   |   20   |   24   |   28   |   1   |   5   |

#  Unencoded  |  10  |   11  |   12  |   13   |   14   |   15   |   16   |   17   |   18  |  19   |
#   Encoded   |  9   |   13  |   17  |   21   |   25   |   29   |   2    |    6   |   10  |  14   |

# Therefore we can define what place to add the current element into in the encoded list with 4 statements
# that are run based on the current traversed index

# def encode(list):

#     concat_mess = ''.join(list)

#     encode_list = [None] * 32

#     for i, val in enumerate(concat_mess):

#         if i < 8: 
#             idx = i*4%32
#         elif i < 16:
#             idx = i*4%32 + 1
#         elif i < 24:
#             idx = i*4%32 + 2
#         elif i < 32:
#             idx = i*4%32 + 3

#         # print(f'{i} : {idx}')

#         encode_list[idx] = val

#     return ''.join(encode_list)


## Return the decimal equivalent of the binary string
# def dec_binary_string(numStr):

#     num = int(numStr, 2)

#     return num


######################################################################
# TEST SECTION of commands to evaluate functions

# print(padded_response('a'))

# print(padded_entry('FRED'))

# mapped_list = [padded_response_list(i) for i in padded_entry('FRED')]
# mapped_list2 = [padded_response(i) for i in padded_entry('FRED')]

# print(mapped_list)

# binStr = encode(mapped_list2)
# print(binStr)

# decNum = dec_binary_string(binStr)
# print(decNum)

# print(encoded_num(mapped_list))



# foo = [padded_response(i) for i in padded_entry('foo')]

# print(dec_binary_string(encode(foo)))

# foo2 = [padded_response(i) for i in padded_entry(' foo')]

# print(dec_binary_string(encode(foo2)))

# foot = [padded_response(i) for i in padded_entry('foot')]

# print(dec_binary_string(encode(foot)))

# BIRD = [padded_response(i) for i in padded_entry('BIRD')]

# print(dec_binary_string(encode(BIRD)))

# string = "Hello World"

# # string with encoding 'utf-8'
# arr = bytes(string, 'utf-8')
# arr2 = bytes(string, 'ascii')

# print(arr,'\n')

# # actual bytes in the the string
# for byte in arr:
#     print(byte, end=' ')
# print("\n")
# for byte in arr2:
#     print(byte, end=' ')