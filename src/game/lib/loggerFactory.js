const log4js = require("log4js");

log4js.configure({
  appenders: {
    out: { type: "stdout" },
    app: { type: "file", filename: "default.log" },
  },
  categories: {
    default: { appenders: ["out", "app"], level: "debug" },
  },
});

const loggerFactory = log4js.getLogger("app");

module.exports = loggerFactory;
