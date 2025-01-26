// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



var reverseString = function(s) {
   let p1=0; p2=s.length-1;

   while(p1<p2){
    [s[p1], s[p2]] = [s[p2], s[p1]]  // destructuring arrray and define array value;
    p1++;
    p2--;
}

};


console.log(reverseString(["H","a","n","n","a","h"]));