/*
* Building Stacks on top linked-list
*
*/

class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}


class Stacks {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0;
    }

    // peek method keep track of last item on top of stack
    peek(){
    return this.top;
    }

    // push method keep added the item on the top of the stacsk
    push(value){
        const newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
            this.bottom = newNode

            
        }else{

            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
            
        }
        this.length++;
        return this;
    }

    // Pop method removes the item from the top of the list
    
    pop(){
        // if no item available 
        if(!this.top){
            return null;
        }
// if only one item left
        if(this.top === this.bottom){
            return this.bottom = null;
        }
// removing top item by referencing next item to the top item
        this.top= this.top.next;
    }
}



const myStacks = new Stacks();

myStacks.push(22);
// myStacks.push(20);
// myStacks.push(14);
myStacks.pop();

console.log(myStacks);
