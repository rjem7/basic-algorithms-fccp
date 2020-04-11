function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
