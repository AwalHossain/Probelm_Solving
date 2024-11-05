// Question:
// Given an array of integers, write a function to filter out all the odd numbers in the array and return them in a new array. Implement this function in two different ways:

// Using an iterative approach (e.g., using for loops or array methods like filter).
// Using a recursive approach without using loops or built-in filtering methods.

// const data = [2, 5, 4, 7, 3, 8, 5, 6, 7, 8, 9, 4];

const oddNumber = (nums) => {
  const newArr = nums.filter((num) => num % 2 !== 0);
  return newArr;
};

let nums = [1, 2, 5, 4, 7, 3, 8, 5, 6, 7, 8, 9, 4];
console.log(oddNumber(nums));
