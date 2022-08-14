var maxArea = function(arr) { 
    let p1=0, p2=arr.length-1, length,width, area, max=0;

    while(p1<p2){
        length = Math.min(arr[p1], arr[p2]);
        width = p2-p1;
        console.log(width,"w");
         area = length * width;

        max = Math.max(area, max);


        if(arr[p1] < arr[p2]){
            p1++
        }else{
            p2--;
        }

    }

    return max;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]));