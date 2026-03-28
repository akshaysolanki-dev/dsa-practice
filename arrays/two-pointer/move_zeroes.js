// Problem: Move Zeroes
// Topic: Arrays
// Difficulty: Easy

// Time Complexity:
// moveZeroesBrute   => O(n)
// moveZeroesBetter  => O(n)
// moveZeroesOptimal => O(n)

// Space Complexity:
// moveZeroesBrute   => O(n)
// moveZeroesBetter  => O(1)
// moveZeroesOptimal => O(1)

// ------------------------------------------------------------
// Problem:
// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
//
// You must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// ------------------------------------------------------------
// Key Concept:
// - Maintain order of non-zero elements
// - Shift non-zero forward
// - Fill remaining with zero
// - Two Pointer is best approach

// ============================================================
// 1. Brute Force Approach (Extra Array)
// ============================================================


function moveZeroesBrute(nums) {
  let temp = [];

  // Step 1: Store non-zero elements
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp.push(nums[i]);
    }
  }

  // Step 2: Count zeros
  let zeroCount = nums.length - temp.length;

  // Step 3: Add zeros at end
  while (zeroCount > 0) {
    temp.push(0);
    zeroCount--;
  }

  return temp;
}

// ============================================================
// 2. Better Approach (In-place, Two Pass)
// ============================================================

function moveZeroesBetter(nums) {
  let index = 0;

  // Step 1: Move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // Step 2: Fill remaining with zeros
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// ============================================================
// 3. Optimal Approach (Single Pass - Two Pointer)
// ============================================================

function moveZeroesOptimal(nums) {
  let j = 0; // position for next non-zero

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
      console.log(nums);
      
    }
  }

  return nums;
}

// ============================================================
// Example Usage
// ============================================================

const nums = [0, 1, 0, 3, 12];


console.log(moveZeroesBrute(nums)); // [1,3,12,0,0]
console.log(moveZeroesBetter(nums)); // [1,3,12,0,0]
console.log(moveZeroesOptimal(nums)); // [1,3,12,0,0]
