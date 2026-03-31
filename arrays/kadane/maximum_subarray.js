// Problem: Maximum Subarray
// Topic: Arrays, Dynamic Programming (Kadane’s Algorithm)
// Difficulty: Medium

// Time Complexity:
// maxSubArrayBrute    => O(n^2)
// maxSubArrayPrefix   => O(n^2)
// maxSubArrayOptimal  => O(n)


// Space Complexity:
// maxSubArrayBrute    => O(1)
// maxSubArrayPrefix   => O(n)
// maxSubArrayOptimal  => O(1)


// ------------------------------------------------------------
// Problem:
// Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// ------------------------------------------------------------
// Key Concept:
// - We need maximum sum of a CONTIGUOUS subarray
// - If current sum becomes negative → discard it
// - Kadane’s Algorithm gives optimal solution

// ============================================================
// 1. Brute Force Approach
// ============================================================

function maxSubArrayBrute(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// ============================================================
// 2. Prefix Sum Approach
// ============================================================

function maxSubArrayPrefix(arr) {
  let n = arr.length;
  let prefix = new Array(n);

  prefix[0] = arr[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = i === 0 ? prefix[j] : prefix[j] - prefix[i - 1];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// ============================================================
// 3. Kadane’s Algorithm (Optimal)
// ============================================================

function maxSubArrayOptimal(arr) {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}


// ============================================================
// Example Usage
// ============================================================

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArrayBrute(nums)); // 6
console.log(maxSubArrayPrefix(nums)); // 6
console.log(maxSubArrayOptimal(nums)); // 6

