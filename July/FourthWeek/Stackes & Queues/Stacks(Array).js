

class Stacks {
    constructor(){
        this.array= [];
    }

    peek(){
     return  this.array[this.array.length-1]
    }
    push(value){
      this.array.push(value);

      return this;
    }

    pop(){

        this.array.pop();
    }

}

const myFirstStacks = new Stacks();

myFirstStacks.push("udemy");
myFirstStacks.push("google")
myFirstStacks.push("facebook")
// // myFirstStacks.push("linkedin")
// myFirstStacks.pop();
myFirstStacks.peek();
myFirstStacks.pop();
// myFirstStacks.pop();

console.log(myFirstStacks);