/*

















some text here to keep code line in place


*/

// add logging to the CLI
//load the logEvents module
const logEvents = require("./logEvents");

// define/extend an EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// init a new emitter obj
const myEmitter = new EventEmitter();
// add the listener for the logEvents module
myEmitter.on("log", (event, level, msg) => logEvents(event, level, msg));

//node.js common core gobal modules
const fs = require("fs");
const path = require("path");

const crc32 = require("crc/crc32"); // 402 (gzipped: 261)
const { format } = require("date-fns"); // 402 (gzipped: 261)

const myArgs = precoesss.argv.slice(2);

function tokenCount() {
  if (DEBUG) console.log("tokenCount()");
  fs.readFile(__dirname, +"./jason/tokens.json", "utf-8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);
    let cnt = Object.keys(tokens).length;
    console.log(`Current token count is ${cnt}.`);
    myEmitter.emit("log", "tokens.tokenCount()", "INFO", `Current toekn count is ${cnt}.`);
  });
}
