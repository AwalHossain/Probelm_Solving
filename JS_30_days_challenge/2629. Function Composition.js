/**
 * @param {Function[]} functions
 * @return {Function}
 */


/*
* here in this problem, we have to return a function that will take a number as an argument
* and return the result of the composition of the given functions
* if the given array is empty, return a function that will take a number as an argument and return the number
* else return a function that will take a number as an argument and return the result of the composition of the given functions
* to do that, we have to loop through the given array from the last element to the first element
* for each element in the array, call the element with the result of the previous function call
* return the result
*/

var compose = function(functions) {

    if(functions.length == 0){
        return function(x){
            return x
        }
    }
            return function(x){
                    let result =x;
                    for(let i = functions.length -1; i>=0; i--){
                        result = functions[i](result)
                    }
                    return result;
                }
    
    };
    
    /**
     * const fn = compose([x => x + 1, x => 2 * x])
     * fn(4) // 9
     */



    /**
    

        SOLUTION -02



 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) {

    if(functions.length == 0){
        return function(x){
            return x
        }
    }
    
        return functions.reduceRight((prev,next)=>{
                return function(x){
                    return  next(prev(x))
                } 
            })
    
    };
    
    /**
     * const fn = compose([x => x + 1, x => 2 * x])
     * fn(4) // 9
     */