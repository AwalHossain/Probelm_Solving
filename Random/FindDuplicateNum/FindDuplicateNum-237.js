// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// google question

var findDuplicate = function(nums) {

    let obj = {};

    for(let i=0; i<nums.length; i++ ){
        let checkDuplicate = obj[nums[i]];
console.log(checkDuplicate,"l");
        if(checkDuplicate >=0){
            return nums[i];
        }else{
            obj[nums[i]] = i;
        }
        console.log(obj,"obj");
    }
    return undefined;
};


console.log(findDuplicate([1,3,4,2,2]));