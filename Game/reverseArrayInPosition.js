function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    let tempValue = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempValue;
  }

  return arr;
}
reverseArrayInPlace([1, 2, 3, 4, 5, 6]);
