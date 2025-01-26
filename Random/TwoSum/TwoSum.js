// function twoSum(nums: number[], target: number): number[] {
    
        
//     const numsMap:any = {};
// for(let i=0; i<nums.length; i++){

//         const currentMapVal = numsMap[nums[i]];
//     if(currentMapVal >= 0){
//         return [currentMapVal, i]
//     }else{
//         let numberToFind = target - nums[i];
//         numsMap[numberToFind] = i;
//     }
    
    
    

// }

// };

// twoSum([2,7,8,9], 9)


function twoSum (nums, target){

   
     const numsMap = {};
     for(let i =0; i< nums.length; i++){
         let currentMapVal = numsMap[nums[i]];
         if(currentMapVal >= 0){
            return [currentMapVal, i]
         }else{
             let numberToFind = target - nums[i];
             numsMap[numberToFind] = i;
         }
     }
    

}

console.log(twoSum([2,5,3,7,9], 9));

