// Given an array nums.
//We define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i]).active
// Return the running sum of nums.

//Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Running sum is obtained as follows:[1. 1+2, 1+2+3, 1+2+3+4]

let nums = [1, 2, 3, 4];

const runningSum = (nums) => {
  nums.reduce(
    (accumulator, currentValue, index, array) => (array[index] += accumulator)
  );
  return nums;
};

console.log(runningSum(nums));

//hint: Think about how we can calculate the i-th number
//in the running sum from the (i-1)-th number.
