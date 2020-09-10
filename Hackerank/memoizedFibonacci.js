function memoizedFibonacci(index, cache) {
  cache = cache || [];
  if (index < 3) {
    return 1;
  } else {
    return (
      memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache)
    );
  }
}

memoizedFibonacci(8);
