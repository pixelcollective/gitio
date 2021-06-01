"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shortener = void 0;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var useGitioUrls_1 = require("../useGitioUrls");
var lodash_1 = require("lodash");
var Shortener = function (_a) {
    var requests = _a.requests, format = _a.format;
    var _b = useGitioUrls_1.useGitioUrls(requests), urls = _b[0], err = _b[1];
    var colWidth = urls.reduce(function (width, url) {
        return url.full.length > width ? url.full.length : width;
    }, 1);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", marginY: 1 },
        err && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Text, { color: "red" }, err))),
        lodash_1.isEqual(format, "string") ? (urls === null || urls === void 0 ? void 0 : urls.map(function (_a, id) {
            var short = _a.short, full = _a.full;
            return (react_1.default.createElement(ink_1.Box, { key: id, flexDirection: "row" },
                react_1.default.createElement(ink_1.Box, { width: colWidth },
                    react_1.default.createElement(ink_1.Text, { color: "white" }, full.replace("https://github.com/", "🔗  "))),
                react_1.default.createElement(ink_1.Box, null,
                    react_1.default.createElement(ink_1.Text, { color: "green" }, short))));
        })) : (react_1.default.createElement(ink_1.Box, { marginTop: 1 },
            react_1.default.createElement(ink_1.Text, { color: "white" }, JSON.stringify(urls))))));
};
exports.Shortener = Shortener;
