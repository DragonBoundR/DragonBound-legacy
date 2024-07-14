const log4js = require("log4js");

// save logs in folder logs
log4js.configure({
  appenders: {
    app: {
      type: "file",
      filename: "logs/app.log",
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
    console: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["app", "console"],
      level: "debug",
    },
  },
});

const loggerFactory = log4js.getLogger("app");

module.exports = loggerFactory;
