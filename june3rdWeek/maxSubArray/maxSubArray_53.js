

var maxSubArray = function(nums) {
    
    let maxSubArray = nums[0];
    let currSum = 0;

  for(let i=0; i<nums.length; i++){

    if(currSum<0){
        currSum = 0;
    }

    currSum +=nums[i];

    maxSubArray = Math.max(maxSubArray, currSum);

  }

  return maxSubArray;
};



console.log(maxSubArray([5,4,-1,7,8]));