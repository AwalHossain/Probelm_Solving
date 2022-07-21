


var rotate = function(nums, k) {

    k = k % nums.length;

    let left = 0, right = nums.length-1;

    while(left < right){

        [nums[left], nums[right]]  = [nums[right], nums[left]]

        left ++;
        right --;
    }

    left = 0; right = k -1 ;
    console.log(k,"first");
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]]

        left ++;
        right --;
    }
    console.log(nums,"up","lo",k);

    left = k; right = nums.length - 1;

    while(left < right){
    [nums[left], nums[right]] = [nums[right], nums[left]]

    left++;
    right = right - 1;

    console.log(nums[left]);
    }

    console.log(nums,"lo");
    

};


console.log(rotate( [1,2,3,4,5,6,7], 3));

