var mySqrt = function(x){ 
    let num =0;

    while(num<=x){
        let avg = Math.floor((num + x)/2);

        if(avg * avg > x) return avg -1;
        else num = avg +1; 
    }
}


console.log(mySqrt(16));