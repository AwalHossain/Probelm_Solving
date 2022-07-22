

class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next: null
        }

        this.tail = this.head;
        this.length++;
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

    insert(index, value){
        if(index >= this.length){

            this.append(value);
            this.length++;
        }
    }
}


const myFirstLinkedList = new LinkedList(10);

myFirstLinkedList.append(12)
myFirstLinkedList.prepend(13)
myFirstLinkedList.insert(10,88)



console.log(myFirstLinkedList.printList());