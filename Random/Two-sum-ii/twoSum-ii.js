

var twoSum = function(numbers, target) {
    let p1=0, p2= numbers.length-1;
      
      while(p1<p2){
          let add = numbers[p1] + numbers[p2];
          console.log(add, "add");
          if(add > target){
              p2--;
          }else if(add<target){
              p1++;
          }else if(add == target){
              return [p1+1, p2+1];
          }
      }
  };

  console.log(twoSum([5,25,75],100));