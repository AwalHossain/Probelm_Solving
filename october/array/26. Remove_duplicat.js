var removeDuplicates = function(nums) {

    for(let i=0;i<nums.length; i++){
        if(nums[i] == nums[i+1]){
           nums.splice(i,1);
            console.log(nums,"inside")
            i--;
        }
        
    }
 
 }


 console.log(removeDuplicates([1,1,2]));