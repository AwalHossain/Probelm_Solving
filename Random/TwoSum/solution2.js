
function twoSum (nums, target){
    // let nums = number.sort();
    let obj = {};

    for(let i=0; i<nums.length; i++){

        let currentVal = obj[target-nums[i]];
        // console.log(obj[target-nums[i]],"cru");
        if(currentVal >=0){
            return [i, obj[nums[i]] ]
        }else{
            obj[nums[i]] = i;
        }

       
    }

}

console.log(twoSum([3,3], 6));