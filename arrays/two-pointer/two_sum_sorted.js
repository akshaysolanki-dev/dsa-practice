// Problem: Two Sum II - Input Array Is Sorted
// Topic: Arrays, Two Pointers
// Difficulty: Medium

// Time Complexity:
// twoSumBrute   => O(n^2)
// twoSumOptimal => O(n)

// Space Complexity:
// twoSumBrute   => O(1)
// twoSumOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// Given a sorted array of integers numbers (1-indexed),
// find two numbers such that they add up to a specific target.
// Return their indices (1-based).

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

// ------------------------------------------------------------
// Key Concept:
// - Array is sorted → use two pointers
// - If sum is too big → move right pointer
// - If sum is too small → move left pointer

// ============================================================
// 1. Brute Force Approach
// ============================================================

function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
}

// ============================================================
// 2. Optimal Approach (Two Pointer)
// ============================================================

function twoSumOptimal(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

// ============================================================
// Example Usage
// ============================================================

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSumBrute(numbers, target)); // [1,2]
console.log(twoSumOptimal(numbers, target)); // [1,2]
