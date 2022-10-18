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

    insert(index, value){
        const newNode = new Node(value, null);

        if(index>=this.length){
            return this.append(value);
        }

        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this.printList();
    }


    traverseToIndex(index){
        let coutner=0;
        let currentNode = this.head;

        while(coutner !== index){
            currentNode = currentNode.next;

            coutner++;
        }
        return currentNode;
    }


    remove(index){

        const leader = this.traverseToIndex(index-1);
        const unwanted = leader.next;
        leader.next = unwanted.next;

        this.length--;
        return this.printList();;


    }


    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            const temp = second.next;
            second.next = first;

            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }

}



const myLinkedList = new LinkedList(10);
myLinkedList.append(20)
myLinkedList.prepend(30)
myLinkedList.prepend(40);
myLinkedList.insert(1,25);
myLinkedList.remove(1);
myLinkedList.reverse();
console.log(myLinkedList.printList())