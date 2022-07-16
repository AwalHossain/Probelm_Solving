

var lengthOfLongestSubstring = function(s) {
    
    let obj = {};
    if(s.length==0) return 0;
        
        if(s.length==1) return 1;
    let long = 0;

    let i = 0; j= 0;

    let set = new Set();

    while(i<s.length){
        let c = s.charAt(i);

        while(set.has(c)){
            set.delete(s.charAt(j));
            j++;
        }
        set.add(c);
        long = Math.max(long, i-j+1);
        i++;
    }
  
    return long;
    
};


console.log(lengthOfLongestSubstring( "pwwkew"));