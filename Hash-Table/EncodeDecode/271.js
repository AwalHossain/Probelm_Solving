function encode(strs) {
  let res = "";
  for (let i in strs) {
    res += strs[i].length + "/" + strs[i];
  }

  return res;
}

function decode(str) {
  let res = [],
    i = 0;

  while (i < str.length) {
    let j = i;
    // find the "/" position
    while (str[j] !== "/") {
      j++;
    }
    console.log(j, "j value");
    // get the length of the string
    let length = parseInt(str.substring(i, j));
    console.log(length, "length of word value");
    // find the actual string
    let string = str.substring(j + 1, j + 1 + length);
    console.log(string, "getting the actual value");
    res.push(string);

    // move the pointer
    i = j + 1 + length;
  }
  return res;
}

const input = ["neet", "code", "love", "you"];

console.log(encode(input)); // 4/neet4/code4/love3/you
let enc = encode(input);

console.log(decode(enc));
