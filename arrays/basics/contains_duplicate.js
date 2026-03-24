// Problem: Contains Duplicate
// Topic: Arrays
// Difficulty: Easy

// Time Complexity:
// containsDuplicateBrute => O(n^2)
// containsDuplicateSort  => O(n log n)
// containsDuplicateSet   => O(n)
// containsDuplicateMap   => O(n)

// Space Complexity:
// containsDuplicateBrute => O(n)
// containsDuplicateSort  => O(1)
// containsDuplicateSet   => O(n)
// containsDuplicateMap   => O(n)

// ------------------------------------------------------------
// Problem:
// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// ------------------------------------------------------------
// Key Concept:
// - Use Set or HashMap for O(n) solution
// - Avoid nested loops for optimization

// ============================================================
// 1. Brute Force Approach
// ============================================================

function containsDuplicateBrute(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }

  return false;
}

// ============================================================
// 2. Sorting Approach
// ============================================================

function containsDuplicateSort(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }

  return false;
}

// ============================================================
// 3. Set Approach (Optimal)
// ============================================================

function containsDuplicateSet(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

// ============================================================
// 4. Hash Map Approach
// ============================================================

function containsDuplicateMap(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > 1) return true;
  }

  return false;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [2, 1, 5, 8, 6, 5];

console.log(containsDuplicateBrute(nums)); // true
console.log(containsDuplicateSort([...nums])); // true
console.log(containsDuplicateSet(nums)); // true
console.log(containsDuplicateMap(nums)); // true
