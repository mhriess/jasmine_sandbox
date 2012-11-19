// Your JavaScript code here
var factorial = function(n) {
  var result = 1;
  for (i = n; i > 0; i--) {
      result *= i;
  }
  return result;
};