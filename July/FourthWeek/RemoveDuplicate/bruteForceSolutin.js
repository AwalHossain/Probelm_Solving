

var removeDuplicates = function(nums) {
    
    let set  = new Set();
    for(let i=0; i<nums.length; i++){

        if(set.has(nums[i])){
            delete set.delete(nums[i-1]);
        }

        set.add(nums[i]);
    }

    return set;
};


console.log(removeDuplicates([1,1,2]));