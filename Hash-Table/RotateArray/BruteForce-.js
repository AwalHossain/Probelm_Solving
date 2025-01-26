var rotate = function(nums, k) { 

    let last = nums.length - k;
    // console.log();
    let length = nums.length - 1;
    let arr = [];
    let b =1;
    let c = 0;
   
    for(let i=length; i>=0; i--){
        if(b <= k){
            arr.push(nums[i]);
            b++;
        }

    };
    let p1=0, p2= arr.length-1;

    while(p1<p2){
       [ arr[p1], arr[p2]] = [arr[p2], arr[p1]]
       p1++;
       p2--;
    }

    for(let i=0; i<nums.length; i++){
        console.log(c);
        if( last >c){
            arr.push(nums[i])
            c++;
        }
    }


    return arr;
}



console.log(rotate( [1,2,3,4,5,6,7],3));

