/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  for (let i in nums) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  // let val =
  const arr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  //  console.log(arr.slice(0,k),"chec",arr)

  return arr.slice(0, k);
};
