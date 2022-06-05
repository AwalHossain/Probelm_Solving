
function plusOne(arr){
    
    for (let i = arr.length -1; i>= 0; i--){
        if(arr[i] < 9){
            console.log(arr);
            arr[i] = arr[i] + 1;
            return arr;
        }else{
            arr[i] = 0;
            console.log(arr);
        }

    }
    arr.unshift(1)
    return arr;
}

console.log(plusOne([9,9]));