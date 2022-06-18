var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }
    let first = s.split("").sort().join();
    let second = t.split("").sort().join();

        console.log(first, second);
    if(first == second){
        return true;
    }else{
       return false
    }

};

console.log(isAnagram("rat", "car"));
// var isAnagram = function(s, t) {
//     let first = s.split("");
//     let second = t.split("");

//     let str1 ={};
//     let str2 ={};
    
//     for(let i=0; i<first.length; i++){

  
//         if(str1[first[i]]> 0){
//             str1[first[i]]++;
//         }else{
//             str1[first[i]] =1;
//         }
      
//     }
//     for(let i=0; i<second.length; i++){
  
//         if(str2[second[i]]> 0){
//             str2[second[i]]++;
//         }else{
//             str2[second[i]] =1;
//         }
      
//     }
//     console.log(str1);
//     console.log(str2);

   
//     str1.map(r => console.log(r))


// };

// console.log(isAnagram("anagram", "nagaram"));