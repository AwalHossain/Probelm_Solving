

var rotate = function(nums, k) {

    const arr1 =[];
    const arr2 = [];

    const actual = nums.length-1-k;

    for(let i=0; i<nums.length; i++){
        if(i > actual){
            arr2.push(nums[i]);
        }else{
            arr1.push(nums[i])
        }
    }

    return [...arr2, ...arr1]

    console.log(arr1, arr2);
};


console.log(rotate( [-1,-100,3,99], 2));