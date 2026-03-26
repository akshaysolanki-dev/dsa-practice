// Problem: Intersection of Two Arrays
// Topic: Arrays, Hashing
// Difficulty: Easy

// Time Complexity:
// intersectionBrute => O(n * m)
// intersectionSet   => O(n + m)
// intersectionMap   => O(n + m)
// intersectionTwoPointer => O(n log n + m log m)

// Space Complexity:
// intersectionBrute => O(1)
// intersectionSet   => O(n)
// intersectionMap   => O(n)
// intersectionTwoPointer => O(1) (excluding sorting)

// ------------------------------------------------------------
// Problem:
// Given two arrays nums1 and nums2,
// return their intersection.

// Each element in the result must be unique.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// ------------------------------------------------------------
// Key Concept:
// - Find common elements
// - Avoid duplicates in result
// - Use hashing or set for optimal solution

// ============================================================
// 1. Brute Force Approach
// ============================================================

function intersectionBrute(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
      
    }
  }

  return result;
}

// ============================================================
// 2. Set Approach (Optimal)
// ============================================================

function intersectionSet(arr1, arr2) {
  let set1 = new Set(arr1);
  let result = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num); // avoid duplicates
    }
  }

  return result;
}

// ============================================================
// 3. HashMap Approach
// ============================================================

function intersectionMap(arr1, arr2) {
  let map = {};
  let result = [];

  for (let num of arr1) {
    map[num] = 1;
  }

  for (let num of arr2) {
    if (map[num] === 1) {
      result.push(num);
      map[num] = 0; // avoid duplicates
    }
  }

  return result;
}

// ============================================================
// 4. Two Pointer Approach (Sorted Arrays)
// ============================================================

function intersectionTwoPointer(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

// ============================================================
// Example Usage
// ============================================================

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersectionBrute(nums1, nums2)); // [2]
console.log(intersectionSet(nums1, nums2)); // [2]
console.log(intersectionMap(nums1, nums2)); // [2]
console.log(intersectionTwoPointer(nums1, nums2)); // [2]
