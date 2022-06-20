var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }
    let first = s.split("").sort().join();
    let second = t.split("").sort().join();

        console.log(first, second);
    if(first == second){
        return true;
    }else{
       return false
    }

};

console.log(isAnagram("rat", "car"));
