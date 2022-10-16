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


    // push()
}