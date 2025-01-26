/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let arr = [];
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    console.log(word, "word", strs[i]);
    if (map.has(word)) {
      map.get(word).push(strs[i]);
    } else {
      map.set(word, [strs[i]]);
    }
  }
  console.log(Array.from(map.values()), "mi");
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
