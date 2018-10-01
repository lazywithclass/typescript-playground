var C = function (f) { return function (a) { return function (b) { return f(b)(a); }; }; };
