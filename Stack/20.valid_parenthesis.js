var isValid = function(s) {

const stack = [];

const closeToOpen = {
    ")":"(",
    "]":"[",
    "}":"{"
}

    for(c in s){
        if(closeToOpen[s[c]]){
            if(stack && (stack[stack.length -1] == closeToOpen[s[c]]) ){
                stack.pop();
            }else{
                return false;
            }
    
        }else{
            stack.push(s[c]);
        }
    }
    console.log(stack,"stc");
    if(stack.length === 0){
        return true
    }else{
        return false
    }

}


console.log(isValid("()[]{}"));