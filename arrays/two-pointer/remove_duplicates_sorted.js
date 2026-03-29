// Problem: Remove Duplicates from Sorted Array
// Topic: Arrays, Two Pointers
// Difficulty: Easy

// Time Complexity:
// removeDuplicatesBrute => O(n^2)
// removeDuplicatesSet   => O(n)
// removeDuplicatesOptimal => O(n)

// Space Complexity:
// removeDuplicatesBrute => O(1)
// removeDuplicatesSet   => O(n)
// removeDuplicatesOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// Given a sorted array nums, remove the duplicates in-place
// such that each unique element appears only once.
// Return the number of unique elements (k).

// Input: nums = [0,0,1,1,2,2,3]
// Output: k = 4, nums = [0,1,2,3,...]

// ------------------------------------------------------------
// Key Concept:
// - Array is sorted → duplicates are adjacent
// - Use Two Pointer approach for optimal solution
// - Modify array in-place

// ============================================================
// 1. Brute Force Approach
// ============================================================

function removeDuplicatesBrute(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; ) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return arr.length;
}

// ============================================================
// 2. Set Approach
// ============================================================

function removeDuplicatesSet(arr) {
  let unique = [...new Set(arr)];

  for (let i = 0; i < unique.length; i++) {
    arr[i] = unique[i];
  }

  return unique.length;
}

// ============================================================
// 3. Optimal Approach (Two Pointer)
// ============================================================

function removeDuplicatesOptimal(arr) {
  if (arr.length === 0) return 0;

  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return k;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [0, 0, 0, 1, 1, 2, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicatesBrute([...nums]));
console.log(removeDuplicatesSet([...nums]));
console.log(removeDuplicatesOptimal(nums));

console.log(nums); // first k elements are unique

