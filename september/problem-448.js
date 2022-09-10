var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let arr = [];
    for(let i=1; i<=length; i++){
        arr.push(i);
    }
    let res = [];
    
    for(let i=0; i<nums.length; i++){
        if(!nums.includes(arr[i])){
            res.push(arr[i])
        }
    }
    
return res
};