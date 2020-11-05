// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].




function almostIncreasingSequence(s) {
    
    let count = 0;
    
    for (let i = 0; i < (s.length-1); i++) {
        if (s[i] >= s[i+1]) {
            // console.log(`i: ${i}, a > b`)
            let a = s.slice(0, i).concat(s.slice(i+1, s.length))
            let b = s.slice(0, i+1).concat(s.slice(i+2, s.length))
            // console.log(`a: ${a}`)
            // console.log(`b: ${b}`)
            
            let testA = testSecondSeq(a)
            let testB = testSecondSeq(b)
            
            // console.log(`testA: ${testA}`)
            // console.log(`testB: ${testB}`)
            
            if (testA || testB) {
                count
            } else {
                count ++
            }
            
           // test [s.pop(i) + s.pop(i+1)]
        }
        else {
            // console.log(`i: ${i}, a < b`)
        }
        
    }

    return (count > 0) ? false : true
}

function testSecondSeq(sec) {
    let count = 0;
    
    for (let i = 0; i < (sec.length-1); i++) {
        if (sec[i] >= sec[i+1]) {
            // console.log(`++count, SS a: ${sec[i]} > b: ${sec[i+1]}`)
            count ++
        }
        // else {
        //     console.log(`SS a: ${sec[i]} < b: ${sec[i+1]}`)
        // }
    }
    
    return (count > 0) ? false : true
}


console.log(almostIncreasingSequence( [1, 3, 2, 1] ) )
console.log(almostIncreasingSequence( [1, 2, 1, 2] ) )
console.log(almostIncreasingSequence( [1, 1, 2, 3, 4, 4] ) )
console.log(almostIncreasingSequence( [10, 1, 2, 3, 4, 5] ) )
console.log(almostIncreasingSequence( [40, 50, 60, 10, 20, 30]) )
console.log(almostIncreasingSequence( [1, 1] ) )
console.log(almostIncreasingSequence( [10, 1, 2, 3, 4, 5, 6, 1] ) )
console.log(almostIncreasingSequence( [1, 2, 3, 4, 99, 5, 6] ) )
console.log(almostIncreasingSequence( [10, 1, 2, 3, 4, 5, 6, 1] ) )


