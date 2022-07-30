/**
 * building Linked-list
 */


// Node: for instantiating linked list

class Node {
   constructor(value){
        this.value = value,
        this.next = null

        this.length= 0;
    }
}
class LinkedList{
   
     constructor(value){
        this.head = {
            value : value,
            next : null
        }
         this.tail = this.head;

         this.length = 1;
    }

    // append method: to add item at end of the list

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
    }


    // prepend method: to add item at the very begining of the list
}



const myLinkedList = new LinkedList(23);
myLinkedList.append(34);
myLinkedList.append(44)

console.log(myLinkedList);