var removeDuplicates = function(nums) {


let i=1;

for(let j=0; j<nums.length; j++){
    if(nums[j] === nums[j+1]){
        
        nums.splice(j,1);
        j--;
    }
    console.log(j,"j");
}

// nums = nums.slice(0, i)
return nums;

}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));