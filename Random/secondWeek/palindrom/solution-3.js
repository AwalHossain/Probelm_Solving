

// solution-2 (without converting the integer to a string)
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x > 0)) {
        return false;
    }

    let reverse = 0
    while (x > reverse) {
        reverse = reverse*10 + x%10
        x = Math.floor(x/10)
    }
    return (x === reverse) || Math.floor(reverse/10) === x
};

console.log(isPalindrome(121));
// Time Complexity: O(1)