

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

/*
* first of all return an array
* loop through the given array
* for each element in the array, call the given function with the element and the index of the element
* if the result of the function call is true, push the element to the array
* here fn is a function that returns true or false
* return the array
*/

var filter = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            newArr.push((arr[i]))
        }
    }
    return newArr;
};