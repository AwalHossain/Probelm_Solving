var firstUniqChar = function(s) {
    let firstUniqChar = {};

    let string_elem = {};

    for(let i = 0; i<s.length; i++){
        if(firstUniqChar[s[i]] == undefined){
            firstUniqChar[s[i]] = i;
            string_elem[s[i]] = i;
            console.log(firstUniqChar);
        }else if(firstUniqChar[s[i]]){
            firstUniqChar.pop(s[i])
        }
        
    }


}

console.log(firstUniqChar('leetlicode'));