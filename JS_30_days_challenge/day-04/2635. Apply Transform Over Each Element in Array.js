
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

/*
* first of all return an array
* loop through the given array
* for each element in the array, call the given function with the element and the index of the element
* push the result of the function call to the array
* return the array
*/

var map = function(arr, fn) {
    let newArr = [];

    for(let i=0; i<arr.length; i++){

        newArr.push(fn(arr[i], i))
    }

    return newArr;
};