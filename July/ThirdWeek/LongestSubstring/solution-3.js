

var lengthOfLongestSubstring = function (s) { 


    // there are some bug in this solution, need to solve 
    let obj = {};
    let j = 0, max = 0;

    for(let i=0; i<s.length; i++){

        let check = obj[s[i]];
        console.log(check,"j",i);
        if(check >=j){
            j = check +1;
            console.log(j,"Inside");
        }

        obj[s[i]] = i;

        max = Math.max(max, i-j+1);
        console.log(obj,"od", max);
    }


    return max;


}



console.log(lengthOfLongestSubstring("abba"));