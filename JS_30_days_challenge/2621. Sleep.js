/**
 * @param {number} millis
 */


/**
 * Here we are returning a promise that will resolve after the given time 
 */

async function sleep(millis) {



    return new Promise((res, rej) => {
        setTimeout(() => {
            res(millis)
        }, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */