


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
        
        const newNode = new Node(holdingPointer)
        
        this.top = newNode;


    }
}

const myFirstStacks = new Stacks();

myFirstStacks.peek();
myFirstStacks.push(10);
myFirstStacks.push(20)
myFirstStacks.push(30)
myFirstStacks.pop();

console.log(myFirstStacks);