function largestOfFour(arr) {
  const res = [];
  arr.forEach(a => a.sort((b,c) => c - b))
  arr.forEach(a => res.push(a[0]));
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
