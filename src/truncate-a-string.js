function truncateString(str, num) {
  
  return str.length > num ? str.substr(0, num) + "..." : str;
}

truncateString("Peter Piper picked a peck of pickled peppers", 11);
