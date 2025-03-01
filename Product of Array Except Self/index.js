/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let arr = new Array(nums.length).fill(0)
   let count = 1;

   for(let i = 0; i<nums.length; i++){
     arr[i] = count;
     count *= nums[i]
   }

   count = 1;
   for(let i = nums.length-1; i>=0; i--){
    arr[i] *=count
    count *= nums[i];
   }

   return arr;
   
};

let nums = [1,2,3,4]
console.log(productExceptSelf(nums));
