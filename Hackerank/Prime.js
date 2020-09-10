

// Complete the primality function below.
function primality(n) {
  for (var x = 2; x < n; x++) {
    if (n == 1 || n == 2) {
      return "Prime";
    }
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return "Not prime";
      }
    }
    return "Prime";
  }
}

