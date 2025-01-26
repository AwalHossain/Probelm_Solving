/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj) {
    // so, i need to find the maximum value from this object
    // to do this frist of all I will initialize a variable with max value
    let max = 0;
    let key = ""
    // Then go through each of this object and compare with the max value
    for (const val in obj) {
        console.log(obj[val], 'chek')
        // comapare with the given max val
        if (max < obj[val]) {
            max = obj[val]
            key = val;
        }
    }
    return ` The winner is ${key} with ${max} vote `
}

console.log(findTheWinner(gameNightFood));