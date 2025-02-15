class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let arr = strs.split(" ");
        let newStr="";
        for(let i=0;i<arr.length; i++){
            
            let length = arr[i].length;
          newStr += `${length}#`+arr[i]
        }
        return newStr
      
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let arr=[];

        while(i<str.length){
            console.log("upside",i)
            let j = i;
            while(str[j] !== "#"){
                j++
            }
            let length = Number(str.substring(i,j));
            console.log(length,"check",i,j)
            i = j+1;
            let word = str.substring(i,i+length);
            console.log(str[i],"downside",i,i+length)
            arr.push(word)
            i = i + length;
        }

        return arr; 
    }
}

const solution = new Solution();

const strs = "I am a student";

const encoded = solution.encode(strs);
const decoded = solution.decode(encoded);

console.log(encoded);
console.log(decoded);
