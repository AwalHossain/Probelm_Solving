/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let arr = new Array(nums.length).fill(0).map(e=> [])
    let map = new Map();
    for(let num of nums){
        map.set(num,( map.get(num)+1) || 1)
    }

    for(let [key,value] of map){
        arr[value].push(key)
    }
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        for(let j of arr[i]){
            newArr.push(j)
            if(k == newArr.length) return newArr;
        }
    }
};

let nums  = [1,1,1,2,2,3], k = 2;

console.log(topKFrequent(nums,k))