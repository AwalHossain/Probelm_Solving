function romanToInt(s:string):number{
    const converter: { [key: string]: number }  = {
        "V": 5,
        "I": 1,
         "X": 10,
         "L": 50,
         "C": 100,
         "D":500,
         "M":1000,
        
    }



    let sum: number = 0;
    for(let i = 0; i<s.length; i++){
    //    sum += converter
    // console.log(converter[]);

        
// sum +=(converter[s[i]]);
    
        // if(s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X")){
        //     sum += converter[s[i + 1]] - converter[s[i]] ; 

        //     i++;
        // }else if(s[i] == "X" && (s[i+1] == "L" || s[i+1] == "C")){

        //     sum += converter[s[i + 1]] - converter[s[i]] ; 
        //     i++
        // }else if(s[i] == "C" && (s[i+1] == "D" || s[i+1]== "M")){

        //     sum += converter[s[i + 1]] - converter[s[i]] ; 
        //     i++
        // }    
        // else{
            sum += converter[s[i]]; 
        // }

    }
    return sum;
}

romanToInt("III")
