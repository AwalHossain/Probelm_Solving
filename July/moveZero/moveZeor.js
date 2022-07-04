

var moveZeroes = function(nums) {
    
    console.log(nums);
    let p1 = 0, p2 = nums.length - 1;

    while(p1< p2){
        [nums[p2], nums[p1]] = [nums[p1], nums[p2]];
        p1++;
        p2--;
    }

    console.log(nums);
};


console.log(moveZeroes([0,1,0,3,12]));