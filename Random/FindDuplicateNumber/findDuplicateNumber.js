
function firstRecurringCharacter(input){


    for(let i=0; i<input.length; i++){

        for(let j=i+1; j<input.length; j++){
            if(input[i] == input[j]){

            // console.log(input[i],"got");
            return input[i]
                
            }
        }
    }

}


console.log(firstRecurringCharacter([1,3,3,1,6,2] ));