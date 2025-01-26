class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/**

    * @returns (number)
    */

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * peek only return the top most value of stack
     */
    peek() {
        return this.top;
    }


    // push mehtod used to push value to the top most of the list
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {

            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }


        this.length++;
        return this;
    }


    // remove the top most item from the stacks
    pop() {
        if (this.length === 0) {
            return null;
        }

        if( this.top === this.bottom){
            this.bottom = null;
        }

        this.top = this.top.next;

        this.length--;
        return this;
    }

}


const myStack = new Stack();
myStack.push("udemy");
myStack.push("google");
myStack.push("Vimeo");
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);