 isPalindrome = function(x) { 

   // conveting number to string
    let b = x.toString();
    let y = b.split("")

     let left = 0, right = y.length-1;

     while(left < right){
       
           [y[left], y[right]] = [y[right], y[left]]
         left++;
         right--;
     }

    // return b == y.join("")
    console.log(y.join(""));


 }



 console.log(isPalindrome(-123));