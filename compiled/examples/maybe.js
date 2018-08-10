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
var unpacker = function (packed, defaultValue) {
    switch (packed.kind) {
        case 0: return packed.value;
        case 1: return defaultValue;
    }
};
