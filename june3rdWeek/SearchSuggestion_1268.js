// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

var suggestedProducts = function(products, searchWord) {
  let sortedProducts =  products.sort();
let l=0, r= products.length-1;
 for(i in searchWord){
    let c = searchWord[i];
    console.log(products[l][i], c);
    while(l<= r && ( products[l] <=i | products[l][i] !=c)){
        l+=1
    }
    while(l<= r && ( products[r] <=i | products[r][i] !=c)){
        r-=1
    }

 

 }
console.log(l,"l", r);
let arr = [];

let remail = r-l +1;
for(j in Math.min(3, remail)){
    arr.push(products[l + j])
}

return arr;


};

console.log(
    suggestedProducts( ["mobile","mouse","moneypot","monitor","mousepad"], "mob")
);