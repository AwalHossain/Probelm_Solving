let target = 11;







 function findResult (nums){
    let newNum;
    for (let i= 0; i<nums.length; i++){

        newNum = (target - nums[i]);
   console.log(newNum, nums[i]);

      
                if(newNum === nums[i]){
            console.log("got the number", newNum[j], nums[i]);
        }
         
    }
 }

 let nums = [2,3,5,7,4];

console.log( findResult(nums));