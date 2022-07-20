

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
}



const myFirstLinkedList = new LinkedList(10);

console.log(myFirstLinkedList);