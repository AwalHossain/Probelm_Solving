


class Node {
    constructor(value){
this.value = value
    this.next = null
    }
    
}


class Stacks {
    constructor(){

       this.top = null,
       this.bottom = null 

       this.length = 0

    }

    peek(){

        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){

            this.top = newNode;
            this.bottom = newNode;
        }else{

            const holdingPointer = this.top;

            this.top = newNode;

            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop(){

        
        const first = this.top;
        
        const holdingPointer = this.top.next;
        
        this.top = holdingPointer;

        this.length--;

    }

}

const myFirstStacks = new Stacks();

myFirstStacks.push("udemy");
myFirstStacks.push("google")
myFirstStacks.push("facebook")
myFirstStacks.push("linkedin")
myFirstStacks.pop();
myFirstStacks.peek();
myFirstStacks.pop();

console.log(myFirstStacks);