
// /*

// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target

// */

// function twoSum(nums: number[], target: number):any {

//     let numsVal: any={};

//     for(let i=0; i<nums.length; i++){

//         const currentMapVal = numsVal[nums[i]]
//         // console.log(nums[i]);
//         if(currentMapVal >=0){
//             return [currentMapVal, i];
//         }else{
//             const numberToFind = target - nums[i];
//             numsVal[numberToFind] = i;
//         }
//     // const  numberToFind =  (target - nums[i])

    
    
//     }

    
    
// };

// console.log(twoSum([2, 4, 18,7,8,9], 22));
