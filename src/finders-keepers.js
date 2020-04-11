function findElement(arr, func) {
  const num = arr.filter((a) => func(a)); 
  return num[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
