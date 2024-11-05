var maxArea = function (arr) {
  let max = 0;
  let currMax = 0;
  let l = 0,
    r = height.length - 1;
  while (l < r) {
    let width = r - l;
    let minHeight = Math.min(height[l], height[r]);
    let area = width * minHeight;
    max = Math.max(area, max);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Time Complexity: O(n)

// Space Complexity: O(1)
 
