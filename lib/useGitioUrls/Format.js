"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
var Format = /** @class */ (function () {
    function Format() {
    }
    Format.gitio = function (uri) {
        return !uri.startsWith("https://") ? "https://git.io/" + uri : uri;
    };
    Format.github = function (uri) {
        return !uri.startsWith("https://") ? "https://github.com/" + uri : uri;
    };
    return Format;
}());
exports.Format = Format;
