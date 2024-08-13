function encode(strs) {
  let res = "";
  for (let i in strs) {
    res += strs[i].length + "#" + strs[i];
  }
  // console.log(res,"here you go")
  return res;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    console.log(j + 1, "check word", j + 1 + length);
    let word = str.substring(j + 1, j + 1 + length);
    arr.push(word);
    i = j + length;
  }
  return arr;
}

const input = ["neet", "code", "love", "you"];

console.log(encode(input)); // 4/neet4/code4/love3/you
let enc = encode(input);

console.log(decode(enc));
