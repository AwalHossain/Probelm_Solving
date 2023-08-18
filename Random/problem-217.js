var containsDuplicate = function(nums) {
    let obj = {};
       
       for(let i=0; i<nums.length; i++){
           
           let check = obj[nums[i]];
           
           if(check >=0){
               return true;
           }else{
               
               obj[nums[i]] = i;
           }
       }
       
       return false
   };


   console.log(containsDuplicate([2,4,4,5,3]));