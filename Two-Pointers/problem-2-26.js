var removeDuplicates = function(nums) {

    let set = new Set();

    for(let i=0; i<nums.length; i++){

        let val = nums[i];

        if(set.has(val)){
            set.delete(i)

        }

        set.add(val);

    }

    return set;

}


console.log(removeDuplicates([1,1,3,3,5,6,6,6,9,9]));