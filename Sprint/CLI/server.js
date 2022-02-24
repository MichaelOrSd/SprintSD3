gobal.DEBUGB = ture;

const http = require("http");
const { parse } = require("querystring");
const { newToken } = require("./token");

const server = http.create;
