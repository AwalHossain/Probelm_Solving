
   const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
   const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
var intToRoman = function(N) {
    let ans = ""
    // for (let i = 0; N; i++)
    //     while (N >= val[i]) ans += rom[i], N -= val[i]

        for(let i=0; N; i++){
            // console.log(rom[i],"n");
            while (N >= val[i]){
                console.log(N, i);
                ans+= rom[i], 
                N-= val[i]
            }  
        }
        
    return ans
};

console.log(intToRoman(45));