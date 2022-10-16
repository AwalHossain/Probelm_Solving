class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}




class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * peek only return the top most value of stack
     * @returns (number)
     */
    peek(){
        return this.top;
    }


    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{

            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }


        this.length++;
        return this;
    }

}


const myStack = new Stack();
myStack.push("udemy");
myStack.push("google");


console.log(myStack);