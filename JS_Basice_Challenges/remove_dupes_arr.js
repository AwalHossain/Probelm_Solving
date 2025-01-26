/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr) {
    // create a new array where we will store the unique recipe
    let newArr = [];
    // looping through each of these recipie
    for (let i = 0; i < arr.length; i++) {
        // will push each of these recipe before that will check if that recipie already in there or not
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }

    }
    // simply return the new array
    return newArr;
}

// console.log(removeDupesFromArray(eggScrambleRecipe));



// alternative solution

function removeDupesFromArray(arr) {
    const uniqueArr = arr.filter((item, index) => {

        console.log(arr.indexOf(item), 'index', index);

        return arr.indexOf(item) === index;
    });
    return uniqueArr;
}

// console.log(removeDupesFromArray(["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]), 'ermov d');

// function removeDupesFromArray(arr) {
//     const itemCount = {};
//     const uniqueArr = arr.reduce((acc, item) => {
//         console.log(item, 'check', acc)
//         if (!itemCount[item]) {
//             itemCount[item] = 1;
//             acc.push(item);
//         }
//         return acc;
//     }, []);
//     return uniqueArr;
// }


function removeDupesFromArray(arr) {

    let newItem = {};

    const uniqueArr = arr.filter((item) => {
        if (!newItem[item]) {
            newItem[item] = 1;
            return true;
        }

        return false;
    })
    return uniqueArr;
}


console.log(removeDupesFromArray(["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]));

