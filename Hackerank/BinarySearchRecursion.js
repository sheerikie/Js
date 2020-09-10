function binarySearch(array, key) {
  let middleIndex = Math.floor(array.length / 2);
  let middleValue = array[middleIndex];
  if (middleValue == key) {
    return true;
  } else if (middleValue < key && array.length > 1) {
    return binarySearch(array.splice(middleIndex, array.length), key);
  } else if (middleValue > key && array.length > 1) {
    return binarySearch(array.splice(0, middleIndex), key);
  } else {
    return false;
  }
}
binarySearch([1, 2, 4, 2, 5, 3, 4], 14);
