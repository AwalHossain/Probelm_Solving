class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}




class DoublyLinkedList{

    constructor(value){
        this.head = new Node(value, null, null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        
        return this;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

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

    insert(index, value){
        const newNode = new Node(value);
        const leader = this.traverseIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        console.log(this);

        return this;

    }

    remove(index){
        const leader = this.traverseIndex(index-1);
        const unwanted = leader.next;

        leader.next = unwanted.next;
        // unwanted.prev = leader;

        this.length--;
        return this;
    }


    traverseIndex(index){
        const counter = 0;
        const currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;

            counter++;
        }
        return currentNode;
    }
    

}


const myDoubleyLinkedList = new DoublyLinkedList(10);
myDoubleyLinkedList.append(20)
myDoubleyLinkedList.prepend(30)
// myDoubleyLinkedList.prepend(40);
// myDoubleyLinkedList.insert(1,25);
myDoubleyLinkedList.remove(1);
// myDoubleyLinkedList.printList()
console.log(myDoubleyLinkedList)