

var lengthOfLongestSubstring = function (s) { 


    // there are some bug in this solution, need to solve 
    let obj = {};
    let i=0, j = 1, max = 0;

    while(i<s.length){

        let check = obj[s[i]];
        delete obj[s[j]];
        console.log(obj,"sj",i);
        // while(check >=0){

           
        //    j++;
        // }

        obj[s[i]] = i;

        max = Math.max(max, i-j+1);
        i++;
        console.log(obj,"od", max);
    }


    return max;


}



console.log(lengthOfLongestSubstring("abba"));