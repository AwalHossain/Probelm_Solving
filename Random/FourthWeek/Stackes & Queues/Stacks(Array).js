
// Creating stacks useing array 

class Stacks {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length -1];
    }

    push(value){
        this.array.push(value);

        return this;
    }

    pop(){

        this.array.pop();

        return this;
    }
}



const myStacks = new Stacks();

myStacks.push(20);
myStacks.push(18)
myStacks.push(24)
myStacks.pop()

console.log(myStacks.peek());