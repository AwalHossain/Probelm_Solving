function longestWord (sen){

  let word = sen.match(/[a-z]+/gi);
//   console.log(word);
return  word.reduce((item, next) => item.length >= next.length ? item : next);
//  return word;
}

console.log(longestWord("kiva be tmi ekahne ashala"));