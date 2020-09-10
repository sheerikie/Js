// Complete the repeatedString function below.
function repeatedString(s, n) {
  var r = n % s.length,
    m = (n - r) / s.length,
    count = 0;

  for (var i = 0; i < s.length; ++i) {
    if (s[i] === "a") {
      count += m + (i < r);
    }
  }
  return count;
}
