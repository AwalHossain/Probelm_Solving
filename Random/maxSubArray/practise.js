
var maxSubArray = function (nums){
    let sum = 0;
    let highestNum = nums[0];

    for(let i=0; i< nums.length; i++){

        if(sum<0){
            sum = 0;
        }

        sum += nums[i];
        console.log(sum,"sum");

       
            highestNum = Math.max(highestNum, sum);
    }
    return highestNum;
}

console.log(maxSubArray([-5,-4,-1,-7,-8]));