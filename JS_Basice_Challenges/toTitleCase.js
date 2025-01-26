/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {

    return toTitleCase(word);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(word) {
    // split the string into an array of words
    let arr = word.split(" ");
    let newWord = "";

    // loop through the array of words
    for (let i = 0; i < arr.length; i++) {
        // loop through each word
        for (let j = 0; j < arr[i].length; j++) {
            // capitalize the first letter of each word
            if (j == 0) {
                newWord += arr[i][j].toUpperCase();
            } else {
                // add the rest of the letters to the word
                newWord += arr[i][j]
            }
        }
        // add a space between each word
        newWord += " "
    }
    return newWord
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(capitalizeWord("pumpkin pranced purposefully across the pond"));


/**
 * Alternative Solution
 */



function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);

}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
    // split the string into an array of words
    str = str.split(" ");
    let newArr = [];
    // loop through the array of words
    for (let i = 0; i < str.length; i++) {
        // capitalize the first letter of each word
        newArr.push(capitalizeWord(str[i]));
    }

    return newArr.join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));