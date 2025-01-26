var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let first = s.split("").sort().join();
  let second = t.split("").sort().join();

  console.log(first, second);
  if (first == second) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  if (s.length !== t.length) return false;

  for (let i in s) {
    if (s[i] !== t[i]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let check = new Map();
  for (let i of s) {
    check.set(i, (check.get(i) || 0) + 1);
  }

  for (let i of t) {
    if (!check.has(i)) return false;
    if (check.has(i)) check.set(i, check.get(i) - 1);
    if (check.get(i) < 0) return false;
  }

  return true;
};

console.log(isAnagram("rat", "car"));
