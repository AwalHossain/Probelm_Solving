/**
 * Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let arr = nums; // copy the array

  arr.sort(); // sort the array

  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === arr[i + 1]) {
      // if the two elements are same then remove them from the array
      arr.splice(i, 2); // dynamically removing the elements from the array
      i--; // decrement the index to check the next element
    }
  }
  return arr;
};
