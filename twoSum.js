function sumEquals(array, sum) {
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      total = array[i] + array[j];
      if (total == sum) {
        sumArray.push([array[i], array[j]]);
      }
    }
  }
  console.log(sumArray);
}
sumEquals([1, 2, 4, 2, 5, 3, 4], 7);
// method 2
function sumEquals(array, sum) {
  let sumObj = {};
  let equalValues = [];
  let base = 0;
  array.forEach((value) => {
    if (!sumObj[value]) {
      sumObj[value] = 0;
    } else {
      sumObj[value];
    }
    if (base + value == 7) {
      equalValues.push([value, base]);
    }
    sumObj[value]++;
    base = value;
  });
  console.log(equalValues);
}
sumEquals([1, 2, 4, 2, 5, 3, 4], 7);
//method 3
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
