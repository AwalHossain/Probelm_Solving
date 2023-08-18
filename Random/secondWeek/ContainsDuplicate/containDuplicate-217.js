 // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



var containsDuplicate = function(nums) {

    let obj = {};

    for(let i =0; i<nums.length; i++){

        let checkNum = obj[nums[i]];
        console.log(obj);
        if(checkNum>=0){
            return true;
        }else{
            obj[nums[i]] = i;
        }

        
        console.log(checkNum);
    }
    return false;


};

console.log(containsDuplicate( [1,2,3,3]));