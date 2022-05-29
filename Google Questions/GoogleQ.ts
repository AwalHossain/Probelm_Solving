
/*

Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target

*/

function twoSum(nums: number[], target: number): any {

    for(let i:number=0; i<nums.length; i++){
        let numberToFind = target - nums[i];

        for(let j=(i+1); j<nums.length; j++){
            if(numberToFind === nums[j]){
              return [i, j]
                
            }
        }
    }
    
};

console.log(twoSum([2,7,8,9], 9));
