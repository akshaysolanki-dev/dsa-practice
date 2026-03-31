// Problem: Minimum Subarray
// Topic: Arrays, Dynamic Programming (Kadane’s Algorithm)
// Difficulty: Medium

// Time Complexity:
// minSubArrayBrute    => O(n^2)
// minSubArrayPrefix   => O(n^2)
// minSubArrayOptimal  => O(n)

// Space Complexity:
// minSubArrayBrute    => O(1)
// minSubArrayPrefix   => O(n)
// minSubArrayOptimal  => O(1)

// ------------------------------------------------------------
// Problem:
// Given an integer array nums, find the subarray with the smallest sum,
// and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: -4

// ------------------------------------------------------------
// Key Concept:
// - We need minimum sum of a CONTIGUOUS subarray
// - If current sum becomes positive → discard it
// - Reverse Kadane’s Algorithm

// ============================================================
// 1. Brute Force Approach
// ============================================================

function minSubArrayBrute(arr) {
  let minSum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      minSum = Math.min(minSum, sum);
    }
  }

  return minSum;
}

// ============================================================
// 2. Prefix Sum Approach
// ============================================================

function minSubArrayPrefix(arr) {
  let n = arr.length;
  let prefix = new Array(n);

  prefix[0] = arr[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  let minSum = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = i === 0 ? prefix[j] : prefix[j] - prefix[i - 1];
      minSum = Math.min(minSum, sum);
    }
  }

  return minSum;
}

// ============================================================
// 3. Kadane’s Algorithm (Optimal - Min Version)
// ============================================================

function minSubArrayOptimal(arr) {
  let minSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    minSum = Math.min(minSum, currentSum);

    if (currentSum > 0) {
      currentSum = 0;
    }
  }

  return minSum;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(minSubArrayBrute(nums)); // -4
console.log(minSubArrayPrefix(nums)); // -4
console.log(minSubArrayOptimal(nums)); // -4
