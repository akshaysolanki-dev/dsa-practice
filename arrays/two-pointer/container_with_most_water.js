// Problem: Container With Most Water
// Topic: Arrays, Two Pointers
// Difficulty: Medium

// Time Complexity:
// maxAreaBrute   => O(n^2)
// maxAreaOptimal => O(n)

// Space Complexity:
// maxAreaBrute   => O(1)
// maxAreaOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// You are given an array height where each element represents
// the height of a vertical line.
// Find two lines that together with the x-axis form a container
// that holds the maximum amount of water.

// Formula:
// area = min(height[left], height[right]) * (right - left)

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// ------------------------------------------------------------
// Key Concept:
// - Use Two Pointers (left & right)
// - Always move the pointer with smaller height
// - Because width decreases, we try to increase height

// ============================================================
// 1. Brute Force Approach
// ============================================================

function maxAreaBrute(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let height = Math.min(arr[i], arr[j]);
      let width = j - i;
      let area = height * width;

      max = Math.max(max, area);
    }
  }

  return max;
}

// ============================================================
// 2. Optimal Approach (Two Pointer)
// ============================================================

function maxAreaOptimal(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = height * width;

    max = Math.max(max, area);

    // move smaller height
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// ============================================================
// Example Usage
// ============================================================

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxAreaBrute(height)); // 49
console.log(maxAreaOptimal(height)); // 49
