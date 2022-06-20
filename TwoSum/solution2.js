
function twoSum (nums, target){

   
    const numsMap = {};
    for(let i =0; i< nums.length; i++){
        let diff = target - nums[i];
        console.log(numsMap, diff);
        let currentMapVal = diff in numsMap;
        console.log(currentMapVal);
        if(currentMapVal ){
           return [numsMap[diff], i];
        }else{
           numsMap[nums[i]] =i;
        }
    }
   

}

console.log(twoSum([2,7,11,15], 9));