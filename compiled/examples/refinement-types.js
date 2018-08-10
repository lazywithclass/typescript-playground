var isNonZeroNumber = function (n) { return n !== 0; };
var divide = function (a, b) { return a / b; };
var denominator = 0;
if (isNonZeroNumber(denominator)) {
    divide(1, denominator);
}
else {
}
var assertNever = function (x) { throw new Error('never'); };
var area = function (s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
};
