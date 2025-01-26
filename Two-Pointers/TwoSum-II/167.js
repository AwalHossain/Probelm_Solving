/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else if (nums[l] + nums[r] === target) {
      return [l + 1, r + 1];
    }
  }
};

let numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));
