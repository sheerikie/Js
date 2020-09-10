function check(n) {
  for (i = 0; i < n.length; i++) {
    if (n[i] % n[i] === 0) {
      console.log(n[i], "Prime Number");
    } else {
      console.log(n[i], "Not a Prime Number");
    }
  }
}
