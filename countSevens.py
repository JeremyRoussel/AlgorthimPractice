

def countSevens(num):
    n = abs(num)
    count = 0

    while (n > 0):
        rem = n % 10
        if rem == 7:
            count += 1
        n = (n-rem) / 10
    
    return count

