

class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next: null
        }

        this.tail = this.head;
        this.length =1;
    }

      append(value){
            const newNode = {
                value: value,
                next: null
            };
            
            this.tail.next = newNode;
            this.tail = newNode;

            this.length++;
        }


    // add item at the begining
    prepend(value){
        const newNode = {
            value: value,
            next : null
        };

        newNode.next = this.head
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const arr = [];
        let currentNode = this.head;
        console.log(currentNode,"curr");
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }

        return arr;
    }

    // insert method: to add item inside the linked-list
  insert(index, value) {

    console.log(index,"i", this.length);
        if (index >= this.length) {
            console.log('yes', index)
            this.length++;
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;

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

    // remove method: to remove item 
    remove(index){
        let leader = this.traverseToIndex(index -1);
        let unwanted = leader.next;
        leader.next = unwanted.next;

        this.length--;

        return this.printList();
    }

    // Reverse the whole linked-list
    reverse(){
        let first = this.head;
        this.tail = first;
        let second = first.next;

        // keep looping to go through all item
        while(second){
            let temp = second.next;
            second.next = first;

            first = second; 
            second = temp;

        }

        this.head.next = null
        this.head = first;
    }

}


const myFirstLinkedList = new LinkedList(10);

myFirstLinkedList.append(12)
myFirstLinkedList.append(24)
myFirstLinkedList.prepend(13)
myFirstLinkedList.insert(4,88)
// myFirstLinkedList.remove(2)
myFirstLinkedList.reverse();



console.log(myFirstLinkedList.printList());