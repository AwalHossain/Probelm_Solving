var trap = function(height) {
    let total = 0;

    let currentWater
    for(let i=0; i<height.length; i++){
        let leftP=i, rightP=i;
        let maxL = 0;
        let maxR = 0;
      
        while(leftP >=0){
            maxL = Math.max(maxL, height[leftP]);
            leftP--;
        }
        while(rightP <height.length){
            maxR = Math.max(maxR,height[rightP])
            rightP++;
        }

        currentWater = Math.min(maxL, maxR) - height[i];

        if(currentWater >=0){
            total += currentWater
        }
    }

    return total;

}


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));