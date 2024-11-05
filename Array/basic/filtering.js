// function isBigEnoug(val) {
//   return val >= 10;
// }

// console.log([1, 2, 10, 22, 4, 44].filter(isBigEnoug));

// const isPrime = (val) => {
//   for (let i = 2; val > i; i++) {
//     if (val % i === 0) {
//       return false;
//     }
//   }
//   return val > 1;
// };

// let num = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(num.map((val) => ({ number: val, isPrime: isPrime(val) })));

/**
 * Searching with filter
 */

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// const filteredFruites = (arr, query) => {
//   const newVal = arr.filter((v) =>
//     v.toLowerCase().includes(query.toLowerCase())
//   );
//   return newVal;
// };

// console.log(filteredFruites(fruits, "ap"), "here you go");

// const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
// const greatIDs = names
//   .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
//   .filter((id, idx, arr) => {
//     if (idx > 0 && arr[idx - 1] >= id) return false;
//     if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
//     return true;
//   });

// console.log(greatIDs);

// const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
// const averaged = numbers
//   .filter((num) => num > 0)
//   .map((num, idx, arr) => {
//     // Without the arr argument, there's no way to easily access the
//     // intermediate array without saving it to a variable.
//     const prev = arr[idx - 1];
//     const next = arr[idx + 1];
//     // let count = 1;
//     let total = num;

//     if (idx > 0 && idx < arr.length - 1) {
//       total = prev + next + num;
//     }

//     const average = total / 3;
//     // Keep two decimal places
//     return Math.round(average * 100) / 100;
//   });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
