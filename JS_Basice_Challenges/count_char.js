function countChars(str) {
    str = str.toLowerCase();
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        str = str.split(" ").join("").toLowerCase();

        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }

    return obj;

}


console.log(countChars("hello thr br")); // {h: 1, e: 1, l: 2, o: 1}