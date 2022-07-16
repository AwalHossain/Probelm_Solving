
var firstUniqChar = function(s) {
       let obj = {};
        let p =1;
        for(let i=0; i<s.length; i++){
            obj[s[i]] ? obj[s[i]]+=p : obj[s[i]] = p;
            console.log(obj);
         
    
        }
        
        for(i in obj){
            if(obj[i] == 1){

                return s.indexOf(i);
            }
        }
};



console.log(firstUniqChar("leelcode"));