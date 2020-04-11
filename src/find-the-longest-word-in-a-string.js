function findLongestWordLength(str) {
  const len = str.split(' ').sort((a, b) => b.length - a.length)[0].length
  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
