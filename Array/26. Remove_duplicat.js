/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {


    
    let left =0;
    for(let right=0;right<nums.length; right++){
        if(nums[right] !== nums[right+1]){
           nums[left] = nums[right];
            left++;
            
        }
    }
    
   return left;
    
}


console.log(removeDuplicates(1,1,3));