
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

    return function counter() {
        return n++;
    }

};

/**
 *  n++ is post increment, so it will return the value of n before incrementing
 * ++n is pre increment, so it will return the value of n after incrementing
 * n+1 is just adding 1 to n, but not incrementing n
 * +n is just converting n to a number
 * --n is pre decrement, so it will return the value of n after decrementing
 */

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
