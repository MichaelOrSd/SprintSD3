// add logging to the CLI
//load the logEvents module
const logEvents = require("./logEvents");

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new EventEmitter();
