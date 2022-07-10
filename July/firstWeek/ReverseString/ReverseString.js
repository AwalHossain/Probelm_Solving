var reverseString = function(s) { 

    let p2 = s.length-1; p1 = 0;

    while(p1< p2){
 [s[p2], s[p1]] = [s[p1], s[p2]]
 p1++;
 p2--;
    }

    console.log(s,"ss");

}

console.log(reverseString(["h","e","l","l","o"]));