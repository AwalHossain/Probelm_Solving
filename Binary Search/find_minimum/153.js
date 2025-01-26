// var findMin = function(nums) {
//     let left = 0, right = nums.length -1;
//     while(left<right){
//         let mid = Math.floor((left+right)/2);
        
//         if(nums[mid] > nums[right]){
//             left = mid + 1;
//         }else{
//             right = mid
//         }
//     }

//     return nums[left]

// };



var findMin = function(nums) {
    let left = 0, right = nums.length -1;
    while(left <= right){
         // If the subarray is already sorted, return the leftmost element
        if (nums[left] < nums[right]) {
            return nums[left];
        }
        let mid = Math.floor((left+right)/2);
        
        if( nums[mid] < nums[mid-1]){
            return nums[mid]
        }else if(nums[mid] > nums[mid+1]){
            return nums[mid+1]
        }

        if(nums[mid] < nums[right]){
            right = mid - 1;
        }else if (nums[mid] > nums[right]){
            left = mid + 1;
        }
    }

    // return nums[left]

};

console.log(findMin([3,4,5,1,2]))



// /**
//  * Second Solution
//  */


