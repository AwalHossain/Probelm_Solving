

function firstRecurringCharacter(input){
    
   let obj = {};
  for( let r=0; r<input.length; r++){
    
     let currenVal = obj[input[r]];
            if(currenVal>=0){
                return input[r];
        }else{
            obj[input[r]] = r;
        }
console.log(obj,"obj");
}
}


console.log(firstRecurringCharacter([1,0,5,11,3,51,0]));