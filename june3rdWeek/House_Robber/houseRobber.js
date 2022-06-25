
var rob = function (nums){
    let length = nums.length;
    let even = 0;
    let odd = 0;
    for(let i =0; i<length; i+=2){
      odd += nums[i]
    }
    for(let i=1; i<length; i+=2){
      even += nums[i]
    }
    return Math.max(odd, even);
}

console.log(rob([2,7,9,3,1]));