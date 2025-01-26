
/**
 * @param {number []} nums
 * @param {number} target
 * @return {number []}
 */

var twoSum = function (nums, target, map = new Map()) {

    for (let i = 0; i < nums.length; i++) {

        let compliment = target - nums[i];

        let subIndex = map.get(compliment);

        const isTarget = map.has(compliment);

        if (isTarget) {
            return [i, subIndex];
        }

        map.set(nums[i], i);
    }

}

console.log(twoSum([2, 7, 11, 15], 9));