

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/**
 *  SOLUTION -01
 * here we are using setTimeout to call the function after the given time
 * and then we are returning a function that will clear the timeout
 *  Here cancelT is the time after which the function will be cancelled
 * and t is the time after which the function will be called
 */
var cancellable = function (fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t);

    return () => {
        return clearTimeout(timer, t)
    }
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */