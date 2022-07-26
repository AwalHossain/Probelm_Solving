var removeDuplicates = function(nums) {


let i=1;

for(let j=0; j<nums.length; j++){
    if(nums[j] === nums[j+1]){
        
        nums[j] = "_"
    }
    console.log(j,"j");
}


let left = 0; 

for(let right = 0; right<nums.length; right++){

    if(nums[right] !== "_"){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
    }
if(nums[right]=== "_"){
        
        console.log(nums.splice(right,1),"Ilo");
        right--;
    }
    
}


// nums =  nums.split("_")




return nums;

}


console.log(removeDuplicates([-3,-1,0,0,0,3,3]));