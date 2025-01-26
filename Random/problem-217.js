var containsDuplicate = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let check = obj[nums[i]];

    if (check >= 0) {
      return true;
    } else {
      obj[nums[i]] = i;
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {};

  for (let i of nums) {
    if (obj[i]) {
      return true;
    } else {
      obj[i] = 1;
    }
  }
  return false;
};

let check = new Set();
for (let i of nums) {
  if (check.has(i)) return true;
  check.add(i);
}
return false;

console.log(containsDuplicate([2, 4, 4, 5, 3]));
