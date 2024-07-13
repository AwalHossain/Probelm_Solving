/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 */

// brute force method
// var countPairs = function (nums, target) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum < target) {
//         console.log(sum, "checking", target);
//         count++;
//       }
//     }
//   }
//   return count;
// };

var countPairs = function (nums, target) {
  let count = 0;
  let l = 0,
    r = nums.length - 1;
  let len = nums.length - 1;
  nums = nums.sort((a, b) => a - b);
  console.log(nums, "sort");
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (l !== r && sum < target) {
      console.log(sum, "checking", l, r);
      count++;
    } else if (l === r) {
      console.log(l, "second", r);
      l++;
      r = len;
    }
    r--;
  }
  return count;
};

let nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2;
console.log(countPairs(nums, target)); // 1
