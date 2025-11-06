//! Problem Statement --> Two Sum

// Given an array of integer numbers and an integer target,
// return the indices of two numbers such that they add upp to target
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// If there is no solution then return undefined

//  time complexity => O(n)

// ? Input
//  [2,11,7,15] and 9

// ? Output
// [0,2] (because 2+7=9)

const twoSum = (arr, target) => {
  const hasMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const check = target - arr[i];
    if (hasMap.has(check)) {
      return [hasMap.get(check), i];
    }
    hasMap.set(arr[i], i);
  }
  return undefined;
};

console.log(twoSum([2, 11, 8, 15], 9));
