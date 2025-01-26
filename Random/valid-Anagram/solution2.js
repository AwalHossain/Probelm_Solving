 var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }
        let first = s.split("").sort();
        let second = t.split("").sort();
    
        let str1 ={};
        let str2 ={};
        
        for(let i=0; i<first.length; i++){
    
      
            if(str1[first[i]]> 0){
                str1[first[i]]++;
            }else{
                str1[first[i]] =1;
            }

            if(str2[second[i]]> 0){
                str2[second[i]]++;
            }else{
                str2[second[i]] =1;
            }
          
        }
    
       
       for(key in str1){
        console.log(str1[key], str2[key]);
        if(str1[key] !== str2[key]){
            return false
        }
       }

       return true;
    

    
    };
    
    console.log(isAnagram("anagram", "nagrama"));