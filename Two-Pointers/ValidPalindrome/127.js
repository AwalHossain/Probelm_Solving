var isPalindrome = function (s) {
  const regx = /[^a-z0-9]/g;
  let newString = s.toLowerCase().replace(regx, "");
  let arr = newString.split("");
  let revArr = [];
  for (let i = 0; i < newString.length; i++) {
    revArr[i] = arr[newString.length - (1 + i)];
  }
  if (arr.join("") == revArr.join("")) {
    return true;
  }
  return false;
};

const input = "A man, a plan, a canal: Panama";
