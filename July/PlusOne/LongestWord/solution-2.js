function longestWord (sen){

    var arr = sen.match(/[a-z]+/gi);

    var sorted = arr.sort((a, b)=>{
        return b.length - a.length;
    })

    return sorted[0];
}


console.log(longestWord("I love.. you"));