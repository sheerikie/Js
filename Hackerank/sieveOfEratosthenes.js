function sieveOfEratosthenes(values) {
  let prime = [];
  let answ = [];
  for (i = 0; i < values; i++) {
    prime[i] = true;
  }
  prime[0] = false;
  prime[1] = false;

  for (i = 2; i <= Math.sqrt(values); i++) {
    for (j = 2; j + i <= values; j++) {
      prime[i] = false;
    }
  }
  for (i = 0; i < values; i++) {
    if (prime[i] == true) answ.push(i);
  }
  return answ;
}

sieveOfEratosthenes(100);
