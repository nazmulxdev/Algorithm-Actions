// Insertion sort implementation
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    console.log(current);
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    console.log("Index", j);
    array[j + 1] = current;
  }
  return array;
};

console.log(insertionSort([5, 3, 8, 4, 2]));
