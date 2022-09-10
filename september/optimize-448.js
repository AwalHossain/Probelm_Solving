
var findDisappearedNumbers = function(nums) {
    for(i in nums){
        pos = Math.abs(nums[i]) -1;
        console.log(pos,"i");
        if(nums[pos]>0){
            nums[pos] *=-1;
            console.log(nums);
        }
    }
    let missing = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] >0){
            missing.push(i+1);
        }
    }

    return missing

}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));