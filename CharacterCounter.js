
function characterCounter (str){
    const stn = str.replace(/\s+/g, "").toLowerCase();
    console.log(stn.length);

    let obj = {};
    for(let i = 0; i<stn.length; i++){
        // obj[stn[i]] =i+1; 

        if(obj[stn[i]] > 0){
        
            obj[stn[i]]++;
        }else{
            obj[stn[i]] = 1;
        }

  
        
    }

   return obj;

}


console.log(characterCounter("Hello everyone  "));


