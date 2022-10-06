var isPalindrome = function (s) {
    let t = s.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');;
    let i = 0, j = t.length - 1;
    while (i < j) {
        [t[i], t[j]] = [t[j], t[i]]

        i++;
        j--;
    }

    console.log(t, "check", s.toLowerCase().replace(/[^0-9a-z]/gi, '').split(''))
    return s.toLowerCase().replace(/[^0-9a-z]/gi, '') == t.join("");
};


console.log(isPalindrome("ab@a"));