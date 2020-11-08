// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first
// half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

a = 1230
// the output should be isLucky(a) = true;

b = 239017
// the output should be isLucky(b) = false.


function isLucky(n) {
    let sum1 = 0
    let sum2 = 0
    
    let str = n.toString().split('')
    let digits = str.length
    let half = digits/2
    
    for (let i = 0; i < digits; i++){
        if (i < half){
            sum1 += parseInt(str[i])
            //console.log(`sum1: ${sum1}`)
        }
        else {
            sum2 += parseInt(str[i])
            //console.log(`sum2: ${sum2}`)
        }
    }
    
    return (sum1 === sum2) ? true : false

}

// ******************** Test Section **********************

console.log( isLucky(a) )
console.log( isLucky(b) )
console.log( isLucky(134008) )
console.log( isLucky(10) )
console.log( isLucky(11) )
console.log( isLucky(1010) )
console.log( isLucky(261534) )
console.log( isLucky(100000) )
console.log( isLucky(999999) )
console.log( isLucky(123321) )


