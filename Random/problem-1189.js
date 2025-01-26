var maxNumberOfBalloons = function(text) { 
 let key = {
    "b":1,
    "a":1,
    "l":2,
    "o":2,
    "n":1
 }

 let res = {
    "b":0,
    "a":0,
    "l":0,
    "o":0,
    "n":0
 }

 for(i in text){
    
     if(text[i] in res){
         res[text[i]] +=1;
        }
    }

    let letter = text.length;
    for(y in res){

        letter = Math.min(letter, res[y]/key[y])
    }
    console.log("res",letter);

    return Math.floor(letter)
}


console.log(maxNumberOfBalloons("nlaebolko"));