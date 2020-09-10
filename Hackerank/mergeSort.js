function mergeSort(array) {
  let middleIdx = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIdx);
  let secondHalf = array.slice(middleIdx);
  return merged(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merged(array1, array2) {
  let result = [];
  while (array1.length && array2.length) {
    let minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem=array2.shift();
    return minElem;
  }
  if (array1.length) return result.concat(array1);
  else result.concat(array2);
  return result;
}
mergeSort([12, 23, 56, 89, 8, 18]);
