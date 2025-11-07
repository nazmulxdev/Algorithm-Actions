//  selectionSort([2,3,4,5,6])

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("State of arr", arr);
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log(`After pass ${i + 1}`, arr);
  }
};

selectionSort([5, 3, 8, 4, 2]);
