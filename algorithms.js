// 1. Write a function that accepts a string as a parameter and converts the first letter of each word to uppercase.
// (i.e. “the quick brown fox” becomes “The Quick Brown Fox”)

function Upper(inputString) {
    let splitString = inputString.split(" ")
    let finalString = ""
    splitString.forEach(element => {
        let char = element.charAt(0).toUpperCase()
        finalString += char + element.slice(1) + " "
    });
    
    return finalString.slice(0,-1)
}

console.log(Upper("the quick brown fox"))

// 2. Write a javaScript function that returns a passed string(one word) with letters in alphabetical order.
// Assume NO punctuation, NO spaces, and NO symbols are used in the string!
// i.e. "awesome" becomes "aeemosw"

function Alpha(text) {
    return text.split('').sort().join('')
}

console.log(Alpha("awesome"));

function fizzBuzz(n) {
    // Write your code here
    for (let index=1; index <= n; index++) {
        let statement = ""
        switch (index) {
            case ((index % 3) == 0):
                console.log("Fizz")
                statement += "Fizz"
            case ((index % 5) == 0):
                statement += "Buzz"
            default:
                console.log(statement)
                if (statement === ""){
                    console.log(index)
                }
                else {
                    console.log(statement)
                }
                
            
        }
    }

}

fizzBuzz(15)

// 3. Write a javaScript function that accepts a number as a parameter and checks if the number is prime or not (true or false)
// A prime number is greater than 0 & 1.

// 4. Write a JavaScript function that accepts 2 arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// i.e. "digitalcrafts, 't' would return 2

// 5. Bonus! A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 5^2, 9 + 16 = 25.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find a, b, and c.
// a, b, and c are unique numbers. a != b != c.