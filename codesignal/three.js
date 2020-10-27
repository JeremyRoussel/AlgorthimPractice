// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

b = []

function rotateImage(matrix) {
    
    let n = matrix[0].length

    squares = Math.floor(n/2)

    for (let i = 0; i < squares; i++){

        // console.log(`i = ${i}`)

        for (let j = 0; j < (n-2*i-1); j++) {

            // console.log(`j = ${j}`)

            // console.log(`A: ${matrix[i][i+j]}`)
            // console.log(`D: ${matrix[n-j-i-1][i]}`)
            // console.log(`C: ${matrix[n-i-1][n-j-i-1]}`)
            // console.log(`B: ${matrix[j+i][n-i-1]}`)

            let temp = matrix[i][i+j]

            matrix[i][i+j] = matrix[n-j-i-1][i]

            matrix[n-j-i-1][i] = matrix[n-i-1][n-j-i-1]

            matrix[n-i-1][n-j-i-1] = matrix[j+i][n-i-1]

            matrix[j+i][n-i-1] = temp

            // console.log(matrix)

        }
    }

    return matrix
}

console.log(rotateImage(a))