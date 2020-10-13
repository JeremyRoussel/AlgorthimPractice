// Given a string s, find the length of the longest substring without repeating characters.

/*
    param: s, {string}
    return: {number}
*/

// Solution to this algorthim uses the 'sliding window' method, along with a set object to check inclusion

var lengthOfLongestSubstring = function(s) {

    // keep track of letters in the window
    let letters = new Set()

    // left edge of window
    let left = 0;
    // right edge of window
    let right = 1;

    // max length set to zero
    let maxLength = 0;

    // we will move the window until the right edge is at the end
    while (right < s.length) {

        // if the right edge is in the set: letters.has() evals true
        if (letters.has(s.charAt(right))){
            // then we:
            letters.delete(s.charAt(left))  // delete item from left
            left ++                         // move left edge over by one

        }
        // if letter is not in the set
        else {

            // add item on right
            letters.add(s.charAt(right))
            // reset length to greater of previous max or length of set
            maxLength = Math.max(maxLength, letters.size)   
            // move right edge over by one
            right ++
        }

    }

    return maxLength

    
};

console.log(lengthOfLongestSubstring('thisishowwedoit'))
console.log(lengthOfLongestSubstring('supercalifragilisticexpealidocious'))
console.log(lengthOfLongestSubstring('averylongstringwithmanycharacters'))
console.log(lengthOfLongestSubstring('bbbbbbbbbbb'))
console.log(lengthOfLongestSubstring('abcabcabcabc'))
