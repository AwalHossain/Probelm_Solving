
function mergeSortedArrays(nums1, nums2){
  let merge = [];
   let i=0;
    let j = 0;
    let p1 = nums1[i];
    let p2  = nums2[j];
  
    if(  nums1.length === 0){
        return nums2;
    }
    if(nums2.length === 0){
        return nums1;
    }
    
    while (p1 || p2){
        if( p2 === undefined || p1<p2){
         merge.push(p1);
          console.log(i,"i");
          p1 = nums1[i]
            i++;
        }else{
            merge.push(p2);
          console.log(j,"j");
          p2 = nums2[j];
            j++;
        }
    }
    return merge;
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30, 44]))