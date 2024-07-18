/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (obj[diff]) {
      arr.push(obj[diff], i);
    } else {
      obj[nums[i]] = i;
    }
  }

  return arr;
};
