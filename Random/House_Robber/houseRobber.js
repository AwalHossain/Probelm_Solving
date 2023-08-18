
var rob = function (nums){
    let length = nums.length;
    // intializing even and odd number
    let even = 0;
    let odd = 0;

    // for odd number starting from zero indices and added two plus every time
    for(let i =0; i<length; i+=2){
      odd += nums[i]
    }

    // for even number starting from one indices and added two plus every time
    for(let i=1; i<length; i+=2){
      even += nums[i]
    }

    // comparing number and return maximum number
    return Math.max(odd, even);
}

console.log(rob([2,7,9,3,1]));