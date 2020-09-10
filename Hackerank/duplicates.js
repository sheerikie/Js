

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let count = 0;
  let sorted_arr = ar.sort();
  let ans = [];
  for (let i = 0; i < n - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      ans.push(sorted_arr[i]);
      count++;
      i += 1;
    }
  }
  return ans.length;
}

