var merge = function(l1, m, l2, n) {
   
 l1.push(...l2)
   return l1.sort((a,b)=> a-b);
 };
 
 
 
 
 console.log(merge([2,2,3,0,0,0],
     3,
     [1,5,6],
     3));