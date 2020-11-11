// Given a monthly salary s in dollars, a list of debts, and a list of interests for these debts, your task is to pay all the debts while spending the least possible amount of money. However, you have a strict restriction: you can spend no more than 10% of your salary on covering debts.

// There is also a rule on how the required payment can change according to your previous payments: if at the end of the month, you do not fully pay your ith debt, its amount increases by (interests[i] / 100) * debts[i] dollars. In other words, if at the end of the month for some i where debts[i] > 0, then debts[i] becomes equal to

// debts[i] + debts[i] * (interests[i] / 100)
// You can pay for the debts in any order. Return the minimum possible amount of money required to cover all the debts.

// Example

// For s = 50, debts = [2, 2, 5], and interests = [200, 100, 150], the output should be coverDebts(s, debts, interests) = 22.

// Each month you are allowed to spend $5 to cover the debts ($50 * 10% = $5).

// Here's a way to pay all the debts over a period of 5 months, spending the minimal amount of $22 for it:

// During the 1st month, spend $2 to cover debts[0] and $3 to partially cover debts[2]. After that the debts array will look like [0, 2, 2]. After recalculations it will look like [0, 2 + 2 * (100 / 100), 2 + (2 * 150 / 100)] = [0, 4, 5].
// During the 2nd month, spend $5 to cover debts[2]. After that the debts array will look like [0, 4, 0]. After recalculations it will look like [0, 4 + 4 * (100 / 100), 0] = [0, 8, 0].
// During the 3rd month, spend $5 to partially cover debts[1]. After that the debts array will look like [0, 3, 0]. After recalculations it will look like [0, 3 + 3 * (100 / 100), 0] = [0, 6, 0].
// During the 4th month, spend $5 one more time to partially cover debts[1] again. After that the debts array will look like [0, 1, 0]. After recalculations the debts array will look like [0, 1 + 1 * (100 / 100), 0] = [0, 2, 0].
// During the 5th month, spend $2 to cover the remaining part of debts[1].
// So over the course of 5 months, you will have paid $5 + $5 + $5 + $5 + $2 = $22 to cover all the debts.

// For s = 40, debts = [2, 2, 5], and interests = [75, 25, 25], the output should be coverDebts(s, debts, interests) = 10.8125.

// Each month you are allowed to spend $4 to cover debts ($40 * 10% = $5).

// Here's a way to pay all the debts over a period of 3 months, spending the minimal amount of $10.8125 for it:

// During the 1st mont, spend $2 to cover debts[0] and $2 to cover debts[1]. After that the debts array will look like [0, 0, 5]. After recalculations it will look like [0, 0, 5 + 5 * (25 / 100)] = [0, 0, 6.25].
// During the 2nd month, spend $4 to partially cover debts[2]. After that the debts array will look like [0, 0, 2.25]. After recalculations it will look like [0, 0, 2.25 + 2.25 * (25 / 100)] = [0, 0, 2.8125].
// During the 3rd month you spend $2.8125 to cover the remaining part of debts[2].
// So over the 3 months, you will have paid $4 + $4 + $2.8125 = $10.8125 to cover all the debts.

function coverDebts(s, debts, interests) {
    
    // track payments made
    let totalPayment = 0
    
    // find monthly payment
    let payment = s*.1
    
    // make combined array for sorting
    let combinedArr = []
    for (let i = 0; i < debts.length; i++){
        combinedArr.push([debts[i], interests[i]])
    }
    
    // create payment order, sort by interests
    combinedArr.sort((a, b) => {
        if (a[1] < b[1]){
            return 1
        }
        else if (a[1] > b[1]){
            return -1
        }
        else {
            return 0
        }
    })
    //console.log(combinedArr)
    
    // find total remaining
    let sum = (debtsArr) => {
        let total = 0
        debtsArr.forEach(entry => {
            total += entry[0]
        })
        return total
    }
    
    // add interests
    let addInterests = (debtsArr) => {
        debtsArr.forEach(entry => {
            entry[0] = parseFloat(entry[0]) * (1+ parseFloat(entry[1])/100)
        })
    }
    
    // while there is money remaining...
    while (sum(combinedArr) > 0){
        // reset remaining funds for this month
        let funds = payment
        
        combinedArr.forEach(entry => {
            // is there funds ?
            if (funds > 0 && entry[0] > 0){
                // pay down entry
                // case where debt > funds, all money goes into this debt
                if (entry[0] > funds){
                    totalPayment += funds
                    entry[0] -= funds
                    funds = 0
                }
                // case where funds >= debt, some money goes into this debt
                if (entry[0] <= funds){
                    totalPayment += entry[0]
                    funds -= entry[0]
                    entry[0] = 0
                }
            }
            
            // if no funds, do nothing
            else {
                
            }
        })
        
        // add interests
        addInterests(combinedArr)
            
        //console.log(combinedArr)
        
    }
    
    return totalPayment

}

// ******************** Test Section **********************

console.log( coverDebts(50, [2, 2, 5], [200, 100, 150]))
console.log( coverDebts(40, [2, 2, 5], [75, 25, 25]))
console.log( coverDebts(10, [1], [1]))
console.log( coverDebts(5000, [100], [1000]))
console.log( coverDebts(990, [100, 1], [70, 200]))
console.log( coverDebts(990, [1, 100], [70, 200]))
console.log( coverDebts(4007, [5, 2, 6, 3, 1, 9, 7, 8, 4], [300, 500, 850, 200, 900, 150, 700, 400, 600]))