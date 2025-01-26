
const arr1 = [1, 2, 3, 4, 6, 5, 2];
const arr2 = [2, 3, 1, 4, 2, 5, 6];


const isSameArray=()=>{

    let obj1={}, obj2={};

    if(arr1.length !== arr2.length) return false;

    for(let i=0; i<arr1.length; i++){

        obj1[arr1[i]] ? obj1[arr1[i]] +=1 : obj1[arr1[i]] = 1;
        obj2[arr2[i]] ? obj2[arr2[i]] +=1 : obj2[arr2[i]] =1;
    }

    for(key in obj1){
        console.log(obj2[key],"ka");

        if(obj1[key] !== obj2[key]){
            return false
        }
    }

    return true
    
    // console.log(obj1, "ob", obj2);
}


console.log(isSameArray(arr1, arr2));