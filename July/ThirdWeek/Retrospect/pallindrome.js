
var isPalindrome = function(x) { 

    let s = x.toString();
    let y = s.split("");
    let l=0, r = y.length - 1;
    for(let i=0; i<y.length; i++){

       
        console.log( [y[l], y[r]] = [y[r], y[l]]);
    };

    return s == y.join("") 
}



console.log(isPalindrome(-121));