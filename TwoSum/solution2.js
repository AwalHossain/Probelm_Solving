
function twoSum (nums, target){
    // let nums = number.sort();
    let obj = {};

    for(let i=0; i<nums.length; i++){

        let currentVal = obj[nums[i]];
        console.log(obj,"cru");
        if(currentVal >=0){
            return [i, obj[nums[i]] ]
        }else{
            let findVal = target - nums[i];
            console.log(findVal, "vai");
            obj[findVal] = i
        }

       
    }

}

console.log(twoSum([3,3], 6));