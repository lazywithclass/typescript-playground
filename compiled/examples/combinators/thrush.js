var T = function (x) { return function (ys) { return ys.reverse().reduce(function (prev, y) { return y(prev); }, x); }; };
var add1 = function (n) { return n + 1; };
var mul2 = function (n) { return n * 2; };
var succDoubled = T(0)([mul2, add1]);
