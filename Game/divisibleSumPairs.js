//sln 1
function divisibleSum(arr, k, n) {
  let count = 0;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
divisibleSum([1, 3, 2, 6, 1, 2], 3, 5);

//sln 2
// Complete the divisibleSumPairs function below.
//you can use map/foreach
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  ar.forEach((value, index, ar) => {
    for (let i = index + 1; i < ar.length; i++) {
      if ((ar[index] + ar[i]) % k === 0) {
        count++;
      }
    }
  });
  return count;
}

//
function dups(ar) {
  ans = [];
  ar.map((values, index, ar) => {
    for (i = index + 1; i < ar.length; i++) {
      if (ar[i] === value) {
        ans.push(ar[i]);
      }
    }
    
  });
  console.log(ans)
}
dups([12,12,3,3,3,1,2])
