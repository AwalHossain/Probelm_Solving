


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

    // printing all the item in an empty array
    printList(){
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }

        return arr;
    }


    // reversing alll the item 
    reverse(){
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        // looping through the item
        while(second){
            console.log(first,"diff",second,"firs");
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp
            console.log(first,"diff",second,"second");
        }
        // loggin for better understand
         console.log(first,"out",second,"thired");
        this.head.next = null;
        this.head = first;

        return this.printList();
    }
}


const myFirstLinkedList = new LinkedList(10);

myFirstLinkedList.append(12)
myFirstLinkedList.prepend(13)
myFirstLinkedList.reverse()
// myFirstLinkedList.insert(10,88)



console.log(myFirstLinkedList.printList());