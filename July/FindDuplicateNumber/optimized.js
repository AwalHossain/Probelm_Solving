

function firstRecurringCharacter(input){
    
   let obj = {};
  for( r in input){
    
     let currenVal = obj[input[r]];
            if(currenVal>=0){
                return input[r];
        }else{
            obj[input[r]] = r;
        }
console.log(obj,"obj");
}
}


console.log(firstRecurringCharacter([1,5,5,1,3,4,6]));