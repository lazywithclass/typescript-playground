var notReallyK = function (k) { return function (func) { func(); return k; }; };
var listOfEmptyStrings = ['', '', ''];
var listOfAs = listOfEmptyStrings.map(notReallyK(function () { })(function () { }));
var print = function (a) { return console.log('about to loop'); };
var scream = function (s) { return s.toUpperCase(); };
var listOfStrings = ['hello', 'what', 'a', 'beautiful', 'day'];
var tap = function (func) { return function (a) {
    func(a);
    return a;
}; };
var K = function (k) { return function (_) { return k; }; };
var returning = function (funx) {
    var args = arguments;
    return function (sideEffects) {
        var result = funx.apply(args);
        if (sideEffects)
            sideEffects(result);
        return result;
    };
};
var arr = [1, 2, 3];
var double = function (n) { return n * 2; };
