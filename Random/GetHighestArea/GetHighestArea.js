// function getArea(arr){
//     let total = 0;

//     for(let i=0; i<arr.length; i++){
     
//      for(let j=(i+1); j<arr.length; j++){

//          let min = Math.min(arr[i], arr[j]);
//          console.log(min,"min");
//          let minus = j - i;
//          let max = min * minus;
         
//          if(max > total){
//              total = max
//          }
//      }
//     }

//     return total;
// }


// console.log(getArea([7,1,2,10,6]));


// function getArea(arr){
//     let total = 0;
// let p1 = 0, p2 = arr.length -1;
// console.log(p1, p2, "first");
//   while(p1< p2){
//       let height = Math.min(arr[p1], arr[p2]);
//       console.log(p1, p2, "first");
//       const width = p2-p1;

//       const area = height * width ;

//       total = Math.max(area, total);

//       if(arr[p1] <= arr[p2]){
//         p1++;
//       }else{
//           p2--;
//       }
//   }

//     return total;
// }


// console.log(getArea([,10,4,5,18,17,6, 3]));


function getArea (arr){
  let p1=0, p2=arr.length -1;
  let total = 0;
  while(p1<p2){
    let height = Math.min(p1, p2);
    let width  = p2 - p1;
     area = height * width ;
    total = Math.max(area, total );
     
    if(arr[p1] <= arr[p2]){
      p1++;
    }else{
      p2--;
    }


  }

  return total;
}

console.log(getArea([4, 10,5, 18, 17, 6, 3]));