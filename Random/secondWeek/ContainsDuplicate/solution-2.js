
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    console.log(set.size,"o");
    if (set.size !== nums.length) return true;
    
    return false;
    
}


console.log(containsDuplicate( [1,2,3,1]));