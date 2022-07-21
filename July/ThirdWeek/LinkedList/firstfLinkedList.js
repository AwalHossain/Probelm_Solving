

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



class LinkedList {
    constructor(value) {

        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //    prepend method to add item at end the of the linked-list

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;

    }

    //    append method is going to add item at very begining of the linked-list

    append(value) {

        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
    }

}



const myFirstLinkedList = new LinkedList(10);


// myFirstLinkedList.append(5)
myFirstLinkedList.append(15)
myFirstLinkedList.prepend(22)
// myFirstLinkedList.prepend(32)
// myFirstLinkedList.prepend(12)

console.log(myFirstLinkedList);