var mergeTwoLists = function(l1, l2) {

let list = new ListNode();
let head = list;

while(l1 && l2){
    if(l1.value< l2.value){
        list.next = new Node(l1.val);
        l1 = l1.next;
    }else{

    }
}

}




// console.log(mergeTwoLists());