var trap = function(height) {
    let total = 0;
    for(let i=0; i<height.length; i++){
        let leftP=i, rightP=i, maxL=0, maxR=0;

        console.log(leftP, rightP, maxL, maxR);
        
        while(leftP>=0){
            console.log(leftP, rightP, maxL, maxR);
            maxL = Math.max(height[leftP], maxL);
            leftP--;
        }
        
        while(rightP<height.length){
            maxR = Math.max(height[rightP], maxR);
            rightP++;
        }
        
        let currentWater = Math.min(maxL, maxR) - height[i]
        if(currentWater >= 0){
            total += currentWater;
        }
    }
    return total;
};


console.log(trap([2,3,2]));