


var mergeTwoLists = function(list1, list2) {
    let i,arr=[];
    for(i = 0; i<list1.length; i++){
        if(list1[i] > list2[i]){
            arr.push(list2[i])
        }else {
            arr.push(list1[i])
        }
    }
    return arr;
};


console.log(mergeTwoLists([1,2,4], [1,3,4]));