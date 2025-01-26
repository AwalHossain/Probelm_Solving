var twoSum = function(numbers, target) {

    let obj = {};
    
    for(let i=0; i<numbers.length; i++){
        console.log(obj);

        let CurrentMapVal = obj[numbers[i]];
        console.log(CurrentMapVal, "mapval");
        if(CurrentMapVal>=0){
            return [obj[numbers[i]]+1, i+1];
        }else{
            let getVal = target - numbers[i];
            obj[getVal] = i;
            console.log(getVal, "val");
        }

     
    }
};

console.log(twoSum([2,7,11,15], 9));