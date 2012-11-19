// Your JavaScript code here
var factorial = function(n) {
  var result = 1;
  for (i = n; i > 0; i--) {
      result *= i;
  }
  return result;
};

var find_missing_loop = function(a) {
  var sorted = a.sort();
  for (var i=1; i<=sorted.length; i++) {
    if (i !== sorted[i-1]) {
      return i;
    };
  };
  return "All there";
}

// Math
var factorial_sum = function(num) {
  for (var i=(num-1); i > 0; i--) {
    num = num + i;
  };
  return num;
};

var find_missing_math = function(a) {
  var supposed_sum = factorial_sum(a.length + 1);
  var actual_sum = eval(a.join("+"));
  var net = supposed_sum - actual_sum;
  if (net > a[a.length - 1]) {
    return "All there";
  } else {
    return net;
  };
}
