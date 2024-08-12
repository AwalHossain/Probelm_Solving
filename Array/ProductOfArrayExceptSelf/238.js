// var productExceptSelf = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let total = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         console.log(nums[j]);

//         total *= nums[j];
//       }
//     }
//     arr.push(total);
//     total = 1;
//   }
//   return arr;
// };
// const nums = [1, 2, 3, 4];

// console.log(productExceptSelf(nums));

// optimize version

var productExceptSelf = function (nums) {
  let n = nums.length;
  let arr = new Array(n).fill(1); // Initialize the result array with 1s

  // Step 1: Calculate prefix products
  let pre = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = pre;
    pre *= nums[i]; // Multiply the running product
  }
  console.log(arr, "first");
  let suff = 1;
  for (let i = n - 1; i >= 0; i--) {
    arr[i] *= suff; // Multiply the suffix product with the prefix product
    console.log(arr[i], "middle", suff);
    suff *= nums[i]; // Update the suffix product
  }
  // return arr;
  console.log(arr, "second");
};
const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
