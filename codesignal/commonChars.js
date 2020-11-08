// Given two strings, find the number of common characters between them.

// Example

let s1 = "aabcc"
let s2 = "adcaa"

// the output should be commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    
    // find lesser of two lengths
    let len = Math.min(s1.length, s2.length)
    
    // set count to zero
    let count = 0
    
    let s1Dict = {}
    
    // create dictionary of letter counts in s1
    for (let i = 0; i < s1.length; i++){
        // if character is not in dictionary, add it
        let char = s1.charAt(i)
        if (!(char in s1Dict)){
            s1Dict[char] = 1
        } else {
            // add 1 to key since character is in dict already
            s1Dict[char] ++
        }
    }
    //console.log(s1Dict)
    
    // loop through s2
    for (let j = 0; j < s2.length; j++){
        let char2 = s2.charAt(j)
        // char2 in s1Dict?
        if (char2 in s1Dict){
            // are there remaining characters in s1Dict to pull from?
            if (s1Dict[char2] > 0){
                count ++
                s1Dict[char2] --
            }
        }
    }
    //console.log(s1Dict)
    
    return count
}

// ***************** Test Section *******************

console.log( commonCharacterCount(s1, s2) )

s1 = "zzzz"; s2 = "zzzzzzz"
console.log( commonCharacterCount(s1, s2) )

s1 = "abca"; s2 = "xyzbac"
console.log( commonCharacterCount(s1, s2) )

s1 = "a"; s2 = "b"
console.log( commonCharacterCount(s1, s2) )

s1 = "a"; s2 = "aaa"
console.log( commonCharacterCount(s1, s2) )