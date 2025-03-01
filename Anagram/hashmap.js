/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let map = new Map();
         for(let ch of s){
            map.set(ch, map.has(ch) ? ( map.get(ch)+1) : 1 )
         }
         for(let ch of t){
             if(map.has(ch)){
            map.set(ch, ( map.get(ch)-1))
             }else{
                 return false
             }
         }
 
 
        let has = [...map.values()].some( a=> Number(a)  !== 0)
        if(has){
         return false
        }
         return true;
 
 };


//  differetn approach

var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false
    let map = new Map();
    for(let ch of s){
        map.set(ch, map.has(ch) ? (map.get(ch)+1) : 1)
    }
    for(let ch of t){
        if(map.has(ch)){
            map.set(ch, (map.get(ch)-1))
        }else{
            return false
        }

        if(map.get(ch) < 0){
            return false
        }
    }
    return true
};

let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))
console.log(isAnagram2(s,t))