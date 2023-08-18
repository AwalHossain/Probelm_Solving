var merge = function(l1, m, l2, n) {
   
   let last = m+n-1;
   while(m>0 && n>0){
    if(l1[m-1]> l2[n-1]){
        l1[last] = l1[m-1];
        
        m--;
    }else{
        l1[last] = l2[n-1];

        n--;
    }
    last--;
   }

//    fills nums1 with leftover nums2
   while(n>0){
    l1[last] = l2[n-1]

    n--;
    last--;
   }

  return l1
};




console.log(merge([2,2,3,0,0,0],
    3,
    [1,5,6],
    3));