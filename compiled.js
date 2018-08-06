var Just = function (val) { return ({ kind: 0, value: val }); };
var Nothing = function () { return ({ kind: 1 }); };
var maybeDivide = function (a, b) {
    switch (b) {
        case 0: return Nothing();
        default: return Just(a / b);
    }
};
var result = maybeDivide(10, 0);
switch (result.kind) {
    case 0: console.log(result.value);
    case 1: console.log('error division by 0');
}
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
