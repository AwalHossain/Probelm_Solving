var isValid = function(s) {

    let stack = [];

    for(const bracket of s.split("")){

        const isParenthesis = bracket === "(";
        if(isParenthesis) stack.push(")");

        const isCurlyBrace = bracket === "{";
        if(isCurlyBrace) stack.push("}");

        const isSquareBracket = bracket === "[";
        if(isSquareBracket) stack.push("]");
        console.log("checking up", bracket);
        const isOpenBracket = isParenthesis || isCurlyBrace || isSquareBracket;
        if (isOpenBracket) continue;


        const isEmpty = !stack.length;
        const isWrongPair = stack.pop() !== bracket;
    
        const isInvalid = isEmpty || isWrongPair;
            console.log(isEmpty, isWrongPair);
        if(isInvalid) return false
    
    }
    // console.log(stack);
    if(stack.length === 0) return true;
}




console.log(isValid("()[]{}"));