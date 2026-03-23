// Problem: Rotate Array
// Topic: Arrays
// Difficulty: Medium


// Time Complexity:
// rotateExtra   => O(n)
// rotateSlice   => O(n)
// rotateOptimal => O(n)

// Space Complexity:
// rotateExtra   => O(n)
// rotateSlice   => O(n)
// rotateOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// Given an array nums and an integer k, rotate the array to the right by k steps.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// ------------------------------------------------------------
// Key Concept:
// Rotation = circular shifting
// Always do: k = k % n


// ============================================================
// 1. Extra Array Approach
// ============================================================

function rotateExtra(arr, k) {
  let n = arr.length;
  if (n === 0) return arr;

  k = k % n;
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
  }

  return result;
}

// ============================================================
// 2. Slice + Concat (JS Shortcut)
// ============================================================

function rotateSlice(arr, k) {
  let n = arr.length;
  if (n === 0) return arr;

  k = k % n;

  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// ============================================================
// 3. Reversal Algorithm (Optimal - Interview Favorite)
// ============================================================

function rotateOptimal(arr, k) {
  let n = arr.length;
  if (n === 0) return arr;

  k = k % n;

  // Step 1: Reverse whole array
  reverse(arr, 0, n - 1);

  // Step 2: Reverse first k elements
  reverse(arr, 0, k - 1);

  // Step 3: Reverse remaining elements
  reverse(arr, k, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// ============================================================
// Example Usage
// ============================================================

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotateExtra(arr, k)); // [5,6,7,1,2,3,4]
console.log(rotateSlice(arr, k)); // [5,6,7,1,2,3,4]
console.log(rotateOptimal([...arr], k)); // [5,6,7,1,2,3,4]


