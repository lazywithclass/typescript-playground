var _a;
var noop = function () { };
var funx = function () {
    var answer = 42;
    return answer;
};
var random = Math.random();
var randomResult = (_a = {}, _a[random] = "now was " + random, _a);
var functionThatReturnsAnObject = function () { return ({ answer: 42 }); };
var watLabel = function () { answer: 42; };
var funx1 = function () { }, funx2 = function () { }, funx3 = function () { };
var funxs = { funx1: funx1, funx2: funx2, funx3: funx3 };
function test(funx) { }
var b = function () { };
test(b);
var c = function (x) { };
var d = function (x) { };
test(d);
