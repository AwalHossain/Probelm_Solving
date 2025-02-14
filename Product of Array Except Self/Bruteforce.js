/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [];
     for(let i in nums){
        let count = 1;
         for(let j in nums){
             if(i !== j) {    
             count *= nums[j]
             }
         }
         arr.push(count)
     }
   return arr;
 };