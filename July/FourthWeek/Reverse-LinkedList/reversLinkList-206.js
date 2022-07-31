


var reverseList = function(head) { 
   let current = head;
   let prev = null;
   
   while(current){
        let next = current.next;
        current.next = prev;
        prev = current;

        current = next;
   }

   return prev;
}


console.log(reverseList([1,2,3,4,5]));