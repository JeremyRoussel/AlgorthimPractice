// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

//  @param nums: array of numbers - ex: [2,5,8,1]
//  @param target: integer number - ex: 7
//  @return array of two numbers: [index1, index2]

var twoSum = function(nums, target) {

    // set up map or dictionary of complement numbers
    let map = new Map;

    for (let i=0; i < nums.length; i++){
        // calculate complement number of the current index
        let complement = target - nums[i]
        // if complement of the current number is in the map already...
        if (map.has(complement)){
            // find the index of the complement number in the map
            let index1 = map.get(complement)
            // return index1 and the current index, as they are the pairs
            return [index1, i]
        }
        // put the number into the map
        map.set(nums[i], i)
    }
};