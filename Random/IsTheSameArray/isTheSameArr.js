const arr1 = [1, 2, 3, 4, 6, 5, 2];
const arr2 = [2, 3, 1, 4, 2, 5, 6];

const isSameArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  
  // Create object like {1: 1, 2: 2, 3: 1 ...} , the number of frequency of an element in the array.
  const obj1 = arr1.reduce((a, c) => {
    a[c] ||= 0;
    a[c]++;
    return a;
  }, {});

  console.log(obj1,);
  
  // Same for the arr2
  const obj2 = arr2.reduce((a, c) => {
    a[c] ||= 0;
    a[c]++;
    return a;
  }, {});
  
  // Now traverse through the obj1 and check if the element count is same or not.
  // If not same then imediately return false.
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}


console.log(isSameArray(arr1, arr2)); // true