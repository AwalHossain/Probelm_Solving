var backspaceCompare = function(s, t) {
    
   
    let ans = [];
    let ans2 =[]
    for(c in s){
        if(s[c] != "#"){
            ans.push(s[c])
          
        }else{
            ans.pop();
        }
        
    }
    
    for(c in t){
            if(t[c] != "#"){
            ans2.push(t[c])
          
        }else{
            ans2.pop();
        }
    }
    
    if(ans.join("") == ans2.join("")){
        return true
    }else{
        return false
    }
   
};


console.log(backspaceCompare("a##c",
"#a#c"));


