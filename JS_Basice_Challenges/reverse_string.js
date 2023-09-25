/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
]

/* Step 1: Reverse a st  ring
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

function reverseString(arr) {
    arr = arr.split("");
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr.join("");


}


function reverseString(arr) {
    let newStr = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i];
    }
    return newStr;
}


/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/



console.log(reverseString(title));
console.log(reverseStringsInArray(messages));




/**
 * Second Solution
 */


function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr;
}

console.log(reverseString("hello"));

