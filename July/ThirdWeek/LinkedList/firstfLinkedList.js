

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
    constructor(value){
        this.head = {
            value:  value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value : value,
            next: null
        };

        this.tail.next = newNode;

        this.tail = newNode;

        this.length++;
        // return this;
    }

    prepend(value){
        const newPre = {
            value: value,
            next: null
        }
        newPre.next = this.head;
        this.head = newPre;
       
    }
}



const myFirstLinkedList = new LinkedList(10);


// myFirstLinkedList.append(5)
myFirstLinkedList.append(15)
// myFirstLinkedList.prepend(22)
myFirstLinkedList.prepend(32)
// myFirstLinkedList.prepend(12)

console.log(myFirstLinkedList);