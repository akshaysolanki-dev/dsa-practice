// Problem: Single Number
// Topic: Arrays, Bit Manipulation
// Difficulty: Easy

// Time Complexity:
// singleNumberBrute => O(n^2)
// singleNumberSort  => O(n log n)
// singleNumberSet   => O(n)
// singleNumberMap   => O(n)
// singleNumberXOR   => O(n)

// Space Complexity:
// singleNumberBrute => O(1)
// singleNumberSort  => O(1)
// singleNumberSet   => O(n)
// singleNumberMap   => O(n)
// singleNumberXOR   => O(1)

// ------------------------------------------------------------
// Problem:
// Given a non-empty array of integers nums,
// every element appears twice except for one.
// Find that single one.

// Input: nums = [2,2,1]
// Output: 1

// ------------------------------------------------------------
// Key Concept:
// - Every number appears twice except one
// - Pairs cancel each other
// - XOR is the most optimal approach

// ============================================================
// 1. Brute Force Approach
// ============================================================

function singleNumberBrute(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count === 1) return arr[i];
  }

  return -1;
}

// ============================================================
// 2. Sorting Approach
// ============================================================

function singleNumberSort(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  return -1;
}

// ============================================================
// 3. Set Approach
// ============================================================

function singleNumberSet(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set][0];
}

// ============================================================
// 4. HashMap / Frequency Count
// ============================================================

function singleNumberMap(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] === 1) return Number(key);
  }

  return -1;
}

// ============================================================
// 5. XOR Approach (Optimal)
// ============================================================

function singleNumberXOR(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [4, 1, 2, 1, 2];

console.log(singleNumberBrute(nums)); // 4
console.log(singleNumberSort([...nums])); // 4
console.log(singleNumberSet(nums)); // 4
console.log(singleNumberMap(nums)); // 4
console.log(singleNumberXOR(nums)); // 4
