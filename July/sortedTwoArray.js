var sortArray = function(nums1,  nums2,){
    let newArr = [];
 
    let i = 0, j=0;
   let p1=nums1[i], p2=nums2[j];
    console.log(p1,p2,"o");
    while(p1 || p2){
        console.log(p1,p2,"p");
        if( p2 == undefined || p1<p2){
            newArr.push(p1)
            i++;
            p1 = nums1[i];
        }else{
            newArr.push(p2);
            j++;
            p2= nums2[j];
        }
    }

    console.log(newArr);

}



console.log(sortArray([1,2,3],[2,5,6]));