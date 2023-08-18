var maxArea = function(arr){
let p1=0, p2=arr.length-1;
let maxArea = 0;
while(p2>p1){
    let length = Math.min(arr[p1], arr[p2]);
    let width = p2-p1;

let area = length * width;
maxArea = Math.max(maxArea, area)
console.log(maxArea,"ma");
    if(arr[p1]> arr[p2]){
        
        p2--;
    }else if(arr[p1] <= arr[p2]){
            p1++;
    }
}
return maxArea;

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));