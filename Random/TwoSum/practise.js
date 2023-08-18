var twoSum = function(nums, target) {

    let obj = {};
  for(let i=0; i<nums.length; i++){

    let currenVal = obj[nums[i]];

    if(currenVal >=0){
        return [i, obj[nums[i]]]
    }else{
        let val = target - nums[i];
        obj[val] = i;
    }
 
  }

}


console.log(twoSum([3,2,11,15,7], 9));

