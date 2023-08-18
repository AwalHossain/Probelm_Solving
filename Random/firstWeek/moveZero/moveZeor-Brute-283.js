

var moveZeroes = function(nums) {
    

    
    let zero = [];
    let num = [];
   for(let i=0; i<nums.length; i++){
    if(nums[i] != 0){
        zero.push(nums[i])
    }else{
        num.push(nums[i])
    }
   }

       console.log(zero,"nami",num);
       return[...zero, ...num]
};


console.log(moveZeroes([0,1,0,3,12]));