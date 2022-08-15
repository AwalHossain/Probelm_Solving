var rotate = function(nums, k) { 
    k = k % nums.length
    console.log(k,"ol");
    let p1=0, p2=nums.length-1;

    while(p1<p2){
        [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
        p1++;
        p2--
    }

    p1=0, p2=k-1;
    while(p1<p2){
        [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
        p1++;
        p2-- 
    }

    p1=3, p2= nums.length-1;
    while(p1<p2){
        [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
        p1++;
        p2-- 
    }

    return nums;
}

console.log(rotate( [-1],3));