/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */


/*
* here in this problem, we have to return a reduced array
* so to do that initially we have to set a variable to the initial value
* if the given array is empty, return the initial value
* Then we have to loop through the given array
* for each element in the array, call the given function with the element and the index of the element
* set the result of the function call to the variable
* return the variable
*/

var reduce = function(nums, fn, init) {
    let arr = init;
    if(nums.length === 0){
        return init;
    }
    for(let i=0; i<nums.length; i++){
        arr =(fn(arr, nums[i]))
    }

    return arr;
};


