/**
 * building Linked-list
 */


// Node: for instantiating linked list

class Node {
    constructor(value) {
        this.value = value,
            this.next = null

        this.length = 0;
    }
}
class LinkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    // append method: to add item at end of the list

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
    }


    // prepend method: to add item at the very begining of the list

    prepend(value) {
        let newNode = new Node(value);
        // holding the the head value
        let holdingPointer = this.head.value;

        // pointing new Head value equal to newNode
        this.head.value = newNode;
        //   head reference change into newNode
        this.head = newNode;

        //   new Node next value referencing preveious head value
        this.head.next = holdingPointer;
    }

     printList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {

            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }
}



const myLinkedList = new LinkedList(23);
myLinkedList.append(34);
myLinkedList.append(44);
myLinkedList.prepend(21)

console.log(myLinkedList);