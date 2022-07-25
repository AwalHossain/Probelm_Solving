

var removeDuplicates = function(nums) {
    
    let set  = {};
    for(let i=0; i<nums.length; i++){
let check = set[nums[i]];
        if(check){
            delete nums[i-1];
        }

        set[nums[i]] = i;
    }

    nums = Object.keys(set);

    return nums;
};


console.log(removeDuplicates([1,1,2]));