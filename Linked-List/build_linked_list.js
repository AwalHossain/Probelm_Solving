class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class LinkedList{
   
    constructor(value){
        this.head = new Node(value, null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let current = this.head;
        const newNode = new Node(value,null);
  
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value,null);

        console.log(newNode,"pre");
        
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }
    


}
const myLinkedList = new LinkedList(10);
myLinkedList.append(20)
myLinkedList.prepend(30)
// myLinkedList.prepend(40)
console.log(myLinkedList)