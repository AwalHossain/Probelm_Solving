

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let sortNum = nums.sort((a,b)=>a-b)
    let map = new Set(sortNum);
    let max = 0;
    let count = 1
    for(let num of map ){
        if(map.has(num+1)){
            count +=1;
        }else{
            max = Math.max(count,max)
            count = 0;
        }
    }
    return max;
 };
 
 
 
let nums = [100,4,200,1,3,2];

console.log(longestConsecutive(nums))