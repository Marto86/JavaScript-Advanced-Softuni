function gcd(x, y) {

  x = Number(x);
  y = Number(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd(15, 5));