var rotate = function(nums, k) {

let newArr = [];

for(let i=1; i<=nums.length; i++){
    let j = (i+k)%nums.length;
    
    newArr.push(nums[j])
}


    nums = newArr;
    return nums;
    console.log(nums,"jal");

}

console.log(rotate([1,2,3,4,5,6,7], 3));