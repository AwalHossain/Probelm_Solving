


var rotate = function(nums, k) {

    k = k % nums.length;

    console.log(k, "ki");

    let l = 0, r = nums.length - 1;

    while(l<r){
        [nums[l], nums[r]] = [nums[r], nums[l]]

        l++;
        r--;
    }

    l = 0, r = k -1

    while(l<r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l = l+1,  r = r-1;

    }

    l = k, r = nums.length - 1;
    while (l<r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l = l+1, r=r-1;
    }

    console.log(nums);
};


console.log(rotate( [1,2,3,4,5,6,7], 3));

