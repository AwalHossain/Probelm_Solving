function factorail(num) {
  //initial the output varialble
  let output;

  //check head is an array and remove the duplicate item
  if (Array.isArray(head)) {
    output = head.filter((item, index) => {
      return head.indexOf(item) === index;
    });
  }

  //return the output
  return output;
}

//call the deleteDuplicates function
const result = factorail(5);

//console.log the final result
console.log(result);
