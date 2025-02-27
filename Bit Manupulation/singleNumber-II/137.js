/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};

  for (let i in nums) {
    console.log(i, "lle");
    if (obj[nums[i]]) {
      console.log(obj[nums[i]]);
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let i in obj) {
    if (obj[i] === 1) return i;
  }
};

// you can also solve this problem using bitwise operators

var singleNumber = function (nums) {
  let seenOnce = 0,
    seenTwice = 0;

  for (let i = 0; i < nums.length; ++i) {
    seenOnce = ~seenTwice & (seenOnce ^ nums[i]);
    seenTwice = ~seenOnce & (seenTwice ^ nums[i]);
  }

  return seenOnce;
};
