var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }
    t = t.split("").sort();
    s = s.split("").sort();

    let first = {};
    let second = {};

    for (let i = 0; i < s.length; i++) {
        if (t[i] !== s[i]) {
            return false;
        }
        let check = first[s[i]];

        if (check) {
            first[s[i]] += 1;
        } else {
            first[s[i]] = 1;
        }


    }

    for (let i = 0; i < t.length; i++) {
        let check = second[t[i]];

        if (check) {
            second[t[i]] += 1;
        } else {
            second[t[i]] = 1;
        }

    }

    for (i in first) {
        if (first[i] !== second[i]) {
            return false;
        } else {
            return true
        }
    }

    console.log(first, second)


};


console.log(isAnagram("ana","kala"));