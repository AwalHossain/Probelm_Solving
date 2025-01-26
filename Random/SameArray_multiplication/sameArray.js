
function samArray (arr1, arr2){

    if(arr1.length !== arr2.length) return "Array not equal"

    for(let i = 0; i< arr1.length; i++){
        const currentIndex = arr2.indexOf(Math.pow(arr1[i], 2 ));
        console.log(currentIndex);
      if(  currentIndex > -1){
        return "SMatched"
      }else{
          return "Sorry unmatched"
      }
    }
}


console.log(samArray([2,4, 6], [16, 4, 36]));