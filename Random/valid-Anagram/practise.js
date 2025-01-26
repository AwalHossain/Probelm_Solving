var isAnagram = function(s, t) {

    let first = s.split("").sort();
    let second = t.split("").sort();

    // for(let i =0; i<first.length; i++){
    //     console.log("second", second[first[i]]);
    // }

    for( data in second){
        console.log(first[data], second[data]);
        if(first[data] != second[data]){
            return false;
        }
    }

    return true;

}

console.log(isAnagram("rat", "car"));