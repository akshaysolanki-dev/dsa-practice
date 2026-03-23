// Problem: Two Sum
// Topic: Arrays
// Difficulty: Easy

// Time Complexity:
// twoSumBrute   => O(n^2)
// twoSumHash    => O(n)
// twoSumOptimal => O(n)   (only when array is sorted)

// Space Complexity:
// twoSumBrute   => O(1)
// twoSumHash    => O(n)
// twoSumOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// ------------------------------------------------------------
// Key Concept:
// - Find complement: target - current element
// - Use HashMap for optimal solution
// - Two Pointer works only if array is sorted

// ============================================================
// 1. Brute Force Approach
// ============================================================

function twoSumBrute(arr, target) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

// ============================================================
// 2. Hashing (Optimal for Unsorted Array)
// ============================================================

function twoSumHash(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return null;
}

// ============================================================
// 3. Two Pointer Approach (Only for Sorted Array)
// ============================================================

function twoSumOptimal(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSumBrute(nums, target)); // [0,1]
console.log(twoSumHash(nums, target)); // [0,1]
console.log(twoSumOptimal(nums, target)); // Works only if sorted
