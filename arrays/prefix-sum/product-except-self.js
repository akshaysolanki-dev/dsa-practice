// Problem: Product of Array Except Self
// Topic: Arrays
// Difficulty: Medium

// Time Complexity:
// productBrute        => O(n^2)
// productPrefixSuffix => O(n)
// productOptimal      => O(n)

// Space Complexity:
// productBrute        => O(n)
// productPrefixSuffix => O(n)
// productOptimal      => O(1)   (excluding output array)

// ------------------------------------------------------------
// Problem:
// Given an array nums, return an array result such that:
// result[i] = product of all elements except nums[i]

// Constraints:
// - Do NOT use division (for optimal solution)
// - Time complexity should be O(n)

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// ------------------------------------------------------------
// Key Concept:
// - Each index = product of left elements × right elements
// - Use Prefix and Suffix multiplication
// - Avoid division for optimal solution

// ============================================================
// 1. Brute Force Approach
// ============================================================

function productBrute(nums) {
  let n = nums.length;
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    let product = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    result[i] = product;
  }

  return result;
}



// ============================================================
// 2. Prefix + Suffix Arrays
// ============================================================

function productPrefixSuffix(nums) {
  let n = nums.length;

  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);
  let result = new Array(n);

  // Build left array
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Build right array
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Build result
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

// ============================================================
// 3. Optimal Approach (Prefix + Suffix, O(1) space)
// ============================================================

function productOptimal(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Prefix pass
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix pass
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}


// ============================================================
// Example Usage
// ============================================================

const nums = [1, 2, 3, 4];

console.log(productBrute(nums)); // [24,12,8,6]
console.log(productPrefixSuffix(nums)); // [24,12,8,6]
console.log(productOptimal(nums)); // [24,12,8,6]
