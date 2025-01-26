

var moveZeroes = function(nums){
    let l=0;


    for(r in nums){
        if(nums[r] !== 0){
            console.log(nums[r]);
           [ nums[l], nums[r] ]=[ nums[r], nums[l]]
            l +=1;
        }
    }
    console.log(nums,"n");
}


console.log(moveZeroes([0,1,0,3,12]));