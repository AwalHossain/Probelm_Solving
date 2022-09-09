var missingNumber = function(nums) {
    let total = nums.reduce((prev, curr)=> prev + curr, 0);
    console.log(total);
    let sum=0;
    let range = nums.length;
    for(let i=0; i<=range; i++){
        sum +=i;
        console.log(sum);
    }
    return sum -total;
};



console.log(missingNumber([9,6,4,2,3,5,7,0,1]));