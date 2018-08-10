"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var request = require("request-promise");
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, args);
};
var io = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2, request.get({ url: 'https://httpbin.org/json', json: true })];
}); }); };
var asIfItWasSync = function () { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('before');
                return [4, io()];
            case 1:
                result = _a.sent();
                console.log(result.slideshow.author);
                console.log('after');
                return [2];
        }
    });
}); };
var usualThenSyntax = function () {
    console.log('before');
    io().then(function (result) { return console.log(result.slideshow.author); });
    console.log('after');
};
var Left = function (val) { return ({ kind: 0, value: val }); };
var Right = function (val) { return ({ kind: 1, value: val }); };
var asyncFunctionThatErrors = function () { return __awaiter(_this, void 0, void 0, function () {
    var url, response, ex_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = 'blargh';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, request.get({ url: url, json: true })];
            case 2:
                response = _a.sent();
                return [2, Promise.resolve(Right(response))];
            case 3:
                ex_1 = _a.sent();
                return [2, Promise.reject(Left(ex_1))];
            case 4: return [2];
        }
    });
}); };
var unpack = function () { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, asyncFunctionThatErrors()];
            case 1:
                result = _a.sent();
                switch (result.kind) {
                    case 0: return [2, result.value];
                    case 1: return [2, result.value];
                }
                return [2];
        }
    });
}); };
asyncFunctionThatErrors().then(function (result) { return log('SUCCESS!', result.value); }, function (error) { return log('ERROR!', error.value.message); });
var asyncFunction = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4, request.get({ url: 'https://httpbin.org/json', json: true })];
        case 1: return [2, _a.sent()];
    }
}); }); };
asyncFunction().then(function (result) { return log('SUCCESS 2!', result); }, function (error) { return log('ERROR 2!', error); });
