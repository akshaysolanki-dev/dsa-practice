// Problem: Missing Number
// Topic: Arrays
// Difficulty: Easy

// Time Complexity:
// missingNumberBrute => O(n^2)
// missingNumberSort  => O(n log n)
// missingNumberSet   => O(n)
// missingNumberSum   => O(n)

// Space Complexity:
// missingNumberBrute => O(1)
// missingNumberSort  => O(1)
// missingNumberSet   => O(n)
// missingNumberSum   => O(1)

// ------------------------------------------------------------
// Problem:
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing.

// Input: nums = [3,0,1]
// Output: 2

// ------------------------------------------------------------
// Key Concept:
// - Numbers range from 0 → n
// - Use sum formula OR hashing for optimal solution

// ============================================================
// 1. Brute Force Approach
// ============================================================

function missingNumberBrute(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) return i;
  }

  return -1; // fallback
}

// ============================================================
// 2. Sorting Approach
// ============================================================

function missingNumberSort(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i;
  }

  return arr.length;
}

// ============================================================
// 3. Set / Hashing Approach
// ============================================================

function missingNumberSet(arr) {
  let set = new Set(arr);

  for (let i = 0; i <= arr.length; i++) {
    if (!set.has(i)) return i;
  }

  return -1;
}

// ============================================================
// 4. Sum Formula (Optimal)
// ============================================================

function missingNumberSum(arr) {
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumberBrute(nums)); // 8
console.log(missingNumberSort([...nums])); // 8
console.log(missingNumberSet(nums)); // 8
console.log(missingNumberSum(nums)); // 8
