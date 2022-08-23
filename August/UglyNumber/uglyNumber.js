var isUgly = function(num) {
    const v = [5, 3, 2];
    for (let i = 0; i < v.length && num > 1; i++) {
      while (num % v[i] === 0) num /= v[i];
    }
    return num === 1;
};


console.log(isUgly(6));