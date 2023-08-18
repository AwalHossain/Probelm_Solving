 var plusOne = function(nums) {
    let arr = nums;
 for (let i = arr.length -1; i>= 0; i--){
        if(arr[i] < 9){
            
            arr[i] = arr[i] + 1;
            return arr;
        }else{
            arr[i] = 0;
        
        }

    }
    console.log(arr,"ham")
            arr.unshift(1)
        console.log(arr,"leter")

        return arr;
};   

console.log(plusOne([4,2,1]));