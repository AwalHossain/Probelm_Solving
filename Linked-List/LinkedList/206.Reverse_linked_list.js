var reverseList = function(head) {
    let prev =null, currentNode = head;
     
     while(currentNode){
         let next = currentNode.next;
         currentNode.next = prev;
         
         prev = currentNode;
         currentNode = next;
     }
     
     return prev;
 };