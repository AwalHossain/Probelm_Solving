
function plusOne(arr, arr2){
    
    let result = {};
    for (let i = 0; i<arr.length; i++){
        let currenVal= result[arr[i]];
        console.log(result, "fi");
            if(currenVal == 0 | currenVal > 0){
                return [currenVal, i];
            }else{
                let target = arr2 - arr[i];
                result[target] = i;
            }
        }

    }
 

console.log(plusOne([2,4,6,5,3,7,1], 9));



