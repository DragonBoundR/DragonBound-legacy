const loggerFactory = require("./loggerFactory");

var Logger = {};

Logger.log = function (str) {
  loggerFactory.info(str);
};

Logger.normal = function (str) {
  loggerFactory.info(str);
};

Logger.info = function (str) {
  loggerFactory.info(str);
};

Logger.debug = function (str) {
  loggerFactory.debug(str);
};

Logger.error = function (str) {
  loggerFactory.error(str);
};

Logger.sql = function (str) {
  loggerFactory.info(str);
};

module.exports = Logger;
