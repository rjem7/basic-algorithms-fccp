function mutation(arr) {
  return Array.from(arr[1].toLowerCase())
  .every((l) => arr[0].toLowerCase().indexOf(l) != -1)
}

mutation(["hello", "hey"]);
