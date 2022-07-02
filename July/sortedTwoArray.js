var sortArray = function(arr1, arr2){


    let i=0, j=0;
    let p1=arr1[i], p2=arr2[j];

    let empty =[];

    while(p1 || p2){
        
        if( p2 === undefined || p2 > p1){
            empty.push(p1);
            i++;
           p1 = arr1[i];
        }else{
            empty.push(p2);
            j++;            
            p2 = arr2[j]
            console.log(arr1[i],"i");
        }
   }
   return empty;
}



console.log(sortArray([1,2,3], [2,4,6]));