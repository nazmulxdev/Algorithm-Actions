// Problem statement --> Binary search

// console.log (binarySearch([3,4,5,6,7,8,9,11],7)); output :4

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    const guess = arr[mid];
    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch([3, 4, 5, 6, 7, 8, 9, 11], 10));
