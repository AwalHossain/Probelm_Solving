

const twoSum = function(numbers, target){
    let i = 0;
    let p1=0, p2= numbers.length-1;
    console.log(p1, p2, "check");
    while(p1<p2){
        let add =numbers[p1] + numbers[p2];
        i++;
    console.log(numbers[p1] + numbers[p2], "check2");

        if(add> 9){
            p2--;
    console.log(p1, p2, "check3");

        }else if(add<9){
            p1++;
        }else if(add == target){
            return [p1 +1, p2+2]
        }
    }
}


console.log(twoSum([1,3,4,5,10,11], 9));