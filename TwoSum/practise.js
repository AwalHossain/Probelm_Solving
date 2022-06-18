var twoSum = function(nums, target) {

    let p1=0, p2=nums.length;
    let i = 0;
    for(let j=0; j<nums.length; j++){
        for(let i=0; i<nums.length; i++){
            let add = nums[i] + nums[j]
            if(add == target) {
                return [[i], [j]]
            }
        }
    }

}


console.log(twoSum([2,3,11,15,7], 9));

