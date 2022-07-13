
 isPalindrome = function(x) {
let y = x.toString();
    console.log(y.split("").reverse().join(""));
return (x.toString() == x.toString().split("").reverse().join(""))
    

};


console.log(isPalindrome(123));