#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = require("react");
var react_1 = require("react");
var ink_1 = require("ink");
var axios_1 = require("axios");
var Shortener = function (_a) {
    var request = _a.request;
    var _b = react_1.useState([]), shorts = _b[0], setShorts = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        request === null || request === void 0 ? void 0 : request.map(function (req, i) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var url, res, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = encodeURIComponent(req);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"]({
                                url: "https://git.io/create",
                                data: "url=" + url,
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    "Content-Length": url.length
                                }
                            })];
                    case 2:
                        res = _a.sent();
                        shorts[i] = { req: req, res: "https://git.io/" + res.data };
                        setShorts(tslib_1.__spreadArrays(shorts));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }, [request]);
    return (React.createElement(ink_1.Box, { flexDirection: "column" },
        error && (React.createElement(React.Fragment, null,
            React.createElement(ink_1.Newline, null),
            React.createElement(ink_1.Text, { color: "red" }, error))), shorts === null || shorts === void 0 ? void 0 :
        shorts.filter(function (short) { return short; }).map(function (_a, id) {
            var req = _a.req, res = _a.res;
            return (React.createElement(ink_1.Box, { marginTop: 1, key: id },
                React.createElement(ink_1.Text, { color: "white" },
                    req.replace("https://github.com/", ""),
                    "   ",
                    React.createElement(ink_1.Text, { color: "green" }, res))));
        })));
};
ink_1.render(React.createElement(Shortener, { request: process.argv.splice(2) }));
