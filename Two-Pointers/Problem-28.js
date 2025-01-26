var strStr = function(haystack, needle) {
    if(haystack.length < needle.length){
        return -1;
    }


    let i=0,j=0;

    while(i<haystack.length && j<needle.length){

        if(haystack[i] == needle[j]){
           i++;
           j++;
        }else{
             console.log("plut leter",i, j)
            i = ++i - j;
            j=0;
        }
    }

   if(needle.length === j){
    return i -j
   }

   return -1;
    // console.log("plut leter",i++, j++)


}


console.log(strStr("svdbutssad","sfad"));