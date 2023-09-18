/**
 * Alternative Solution
 */



function isAnagram(str1, str2) {
    // check the length
    if (str1.length !== str2.length) {
        return false
    }

    // sort them
    let one = str2.split("");
    let two = str1.split("");

    let obj = {};

    for (let i = 0; i < one.length; i++) {
        obj[two[i]] = i;
    }
    for (let i = 0; i < one.length; i++) {
        if (obj[one[i]] === undefined) {
            return false
        }
    }

    return true;

}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("pea", "ape"));