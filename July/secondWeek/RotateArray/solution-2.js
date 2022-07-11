var rotate = function(nums, k) {

let newArr = [];
//  the array have start from the i = 1, in order to solve this problem and the limitation should equal or less than array length cause 
for(let i=1; i<=nums.length; i++){
    let j = (i+k)%nums.length;
    
    newArr.push(nums[j])
}


    nums = newArr;
    return nums;
    console.log(nums,"jal");

}

console.log(rotate([1,2,3,4,5,6,7], 3));