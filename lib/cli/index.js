#!/usr/bin/env node
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var Shortener_1 = require("./Shortener");
var lodash_1 = require("lodash");
var init = {
    requests: [],
    format: "string",
};
var args = process.argv.splice(2);
var props = args.reduce(function (props, arg) {
    return lodash_1.isEqual(arg, "--json")
        ? __assign(__assign({}, props), { format: "json" }) : { requests: __spreadArray(__spreadArray([], props.requests), [arg]), format: props.format };
}, init);
ink_1.render(react_1.default.createElement(Shortener_1.Shortener, __assign({}, props)));
