function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  var res = arr.map(function(a) {
    return a.replace(a.charAt(0), a.charAt(0).toUpperCase());
  });
  return res.join(" ");
}

titleCase("I'm a little tea pot");
