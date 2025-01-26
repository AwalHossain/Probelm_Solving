/**
 * @param {number[]} arr
 * @return {boolean}
 */


/**
 * Here first of all we have to find the peak of the mountain
 * then we have to check if the peak is not the first or the last element of the array
 *  to do that we have to loop through the array from the first element to the last element
 * if the element is greater than the next element then we have found the peak
 * then we have to check if the peak is not the first or the last element of the array
 * her i have used two pointer approach
 * one pointer will start from the first element and will move forward until the element is less than the next element
 * another pointer will start from the last element and will move backward until the element is less than the previous element
 * if the two pointer meets at the same point then the peak is not the first or the last element of the array
 * then we got a valid mountain array
 */

var validMountainArray = function(arr) {
    let length = arr.length-1;
    let l=0, r = length;

    while(l<length && arr[l]<arr[l+1]){
        l++;
    }

    while(r>0 && arr[r]<arr[r-1]){
        r--;
    }

    if(l>0 && r<length && r==l){
        return true
    }else {
        return false
    }
    
};