


// let myFirstLinkedList = {
//     head:{
//         value:5,
//         next:{
//          value: 10,
//          next:{
//             value: 15,
//             next:{
//                 value: null
//             }
//          }
//         }
//     }
// }

// new class

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class LinkedList {
    constructor(value) {

        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //    prepend method to add item at end the of the linked-list

    prepend(value) {
        const newNode = new Node(value);
        // newNode.prev = this.tail;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;

    }

    //    append method is going to add item at very begining of the linked-list

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
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

    // inserting vlaue inside linked-list

    insert(index, value) {

        if (index >= this.length) {
            console.log('yes', index)
            return this.prepend(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        let coutner = 0;

        let currentNode = this.head;

        while (coutner !== index) {

            currentNode = currentNode.next;

            coutner++;
        }
        console.log(currentNode, "node");
        return currentNode;
    }


    // Removing element from linked list

    remove(index){
        const leader = this.traverseToIndex(index-1);

        const unwanted = leader.next;
        leader.next = unwanted.next;

        this.length--;
        return this.printList();
    }

}



const myFirstLinkedList = new LinkedList(10);


myFirstLinkedList.append(15)
myFirstLinkedList.prepend(22);

myFirstLinkedList.insert(2, 12);
// myFirstLinkedList.remove(1);


console.log(myFirstLinkedList);