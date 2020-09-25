// write a function that counts the number of times the number 7 occurs in a given integer
// without converting it to a string.
// For example the number 7,704,793 would output 3

function countSevens(num) {

    if (typeof num === 'number') {
        
        let n = Math.abs(num) // take absolute value, store in placeholder

        let count = 0; // initialize count

        while (n > 0) {  // while loop condition

            let rem = n % 10  // find digit in ones place

            if (rem === 7) { count ++ } // increase count if remainer equals 7

            n = (n - rem) / 10 // remove ones place, decrease placeholder
        }

        console.log(`Count of ${num} = ${count}`)

    }
    else {
        console.log('Not a number!')
    }
}

countSevens(7704793)
countSevens(7777)
countSevens(508264321946)