function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let tempValue = array[j];
      if (array[j + 1] > tempValue) {
        array[j] = array[j + 1];
        array[j + 1] = tempValue;
      }
    }
  }
  return array;
}

bubbleSort([3, 4, 7, 8, 1, 5, 7]);
