"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.axios = void 0;
var axios_1 = __importDefault(require("axios"));
var axios = axios_1.default.create({
  method: "POST",
  baseURL: "https://git.io/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
exports.axios = axios;
