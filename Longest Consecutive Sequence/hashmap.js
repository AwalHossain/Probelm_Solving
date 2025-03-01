

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max =  0;
    let count = 1
    let map = new Set(nums)

    for (let num of map){
        if(!map.has(num-1)){
            while(map.has(num+count)){
                count +=1
            }
            max = Math.max(max, count);
            count = 1
        }
    }
    return max;
 };
 
 
 
let nums = [100,4,200,1,3,2];

console.log(longestConsecutive(nums))