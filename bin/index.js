"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const ink_1 = require("ink");
const axios_1 = tslib_1.__importDefault(require("axios"));
const Shortener = ({ request }) => {
  const [shorts, setShorts] = react_1.useState([]);
  const [error, setError] = react_1.useState(null);
  react_1.useEffect(() => {
    request === null || request === void 0
      ? void 0
      : request.map(async (req, i) => {
          const url = encodeURIComponent(req);
          try {
            const res = await axios_1.default({
              url: `https://git.io/create`,
              data: `url=${url}`,
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": url.length,
              },
            });
            shorts[i] = { req, res: `https://git.io/${res.data}` };
            setShorts([...shorts]);
          } catch (error) {
            setError(error);
          }
        });
  }, [request]);
  return react_1.default.createElement(
    ink_1.Box,
    { flexDirection: "column" },
    error &&
      react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, { color: "red" }, error)
      ),
    shorts === null || shorts === void 0
      ? void 0
      : shorts
          .filter((short) => short)
          .map(({ req, res }, id) =>
            react_1.default.createElement(
              ink_1.Box,
              { marginTop: 1, key: id },
              react_1.default.createElement(
                ink_1.Text,
                { color: "white" },
                req.replace("https://github.com/", ""),
                "   ",
                react_1.default.createElement(
                  ink_1.Text,
                  { color: "green" },
                  res
                )
              )
            )
          )
  );
};
exports.default = ink_1.render(
  react_1.default.createElement(Shortener, { request: process.argv.splice(2) })
);
//# sourceMappingURL=index.js.map
