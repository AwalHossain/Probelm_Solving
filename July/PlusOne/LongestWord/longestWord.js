// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

var LongestWord = (sen)=>{
    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '')

    let longest ="";
    console.log(sen,"o");

    var arr = sen.split(" ").forEach(word =>{
        console.log(word.length);
        if(word.length > longest.length) longest = word;
        
    })
    return longest;
}


console.log(LongestWord("    I bini Love!!...  nobi you"    ));