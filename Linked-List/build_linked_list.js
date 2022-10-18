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
        this.length=1;
    }

    append(value){
        const newNode = new Node(value, null);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value, null);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }

    printList(value){
        const arr = [];
        let currentNode = this.head;

        while(currentNode !== null){
            arr.push(currentNode.value);

            currentNode = currentNode.next;
        }

        return arr;
    }

    

}



const myLinkedList = new LinkedList(10);
myLinkedList.append(20)
myLinkedList.prepend(30)
myLinkedList.prepend(40)
console.log(myLinkedList.printList())