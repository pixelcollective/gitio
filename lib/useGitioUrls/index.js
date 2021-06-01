"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrls = exports.shortenUrl = exports.useGitioUrls = void 0;
var react_1 = require("react");
var axios_1 = require("./axios");
var Format_1 = require("./Format");
var qs_1 = __importDefault(require("qs"));
var shortenUrl = function (inputUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = {
                    full: Format_1.Format.github(inputUrl),
                    short: null,
                };
                return [4 /*yield*/, axios_1.axios({
                        url: "create",
                        data: qs_1.default.stringify({ url: url.full }),
                        headers: {
                            "Content-Length": url.full.length,
                        },
                    })];
            case 1:
                response = _a.sent();
                url.short = Format_1.Format.gitio(response.data);
                return [2 /*return*/, url];
        }
    });
}); };
exports.shortenUrl = shortenUrl;
var shortenUrls = function (urls) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(urls.map(function (url) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, shortenUrl(url)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); }))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.shortenUrls = shortenUrls;
var useGitioUrls = function (input) {
    var _a = react_1.useState([]), urls = _a[0], setUrls = _a[1];
    var _b = react_1.useState(), err = _b[0], setErr = _b[1];
    react_1.useEffect(function () {
        try {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!input)
                                return [2 /*return*/];
                            return [4 /*yield*/, shortenUrls(input)];
                        case 1:
                            result = _a.sent();
                            setUrls(result);
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        catch (err) {
            setErr(err);
        }
    }, [input]);
    return [urls, err];
};
exports.useGitioUrls = useGitioUrls;
