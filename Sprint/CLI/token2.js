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

function tokenList() {
  if (DEBUG) console.log("token.tokenCount()");
  fs.readFile(__dirname, +"./jason/tokens.json", "utf-8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);
    console.log("** User List **");
    tokens.forEach((obj) => {
      console.log(" * " + obj.username + ": " + obj.token);
    });
    myEmitter.emit("log", "tokens.tokenList()", "INFO", `Current token list was displayed.`);
  });
}

function newToken(username) {
  if (DEBUG) console.log("token.newToken()");

  let enwToken = JSON.parse(`{
        "created": "2020-01-01 12:30:00",
        "username": "username",
        "email": "user@example.com",
        "phone": "555-555-5555",
        "token": "token",
        "expires": "2020-01-04 12:30:00",
        "confirmed": "tbd"
    }`);
  let now = new Date();
  let expires = addDays(now, 3);

  newToken.created = `${format(now, "yyyy-MM-dd HH:mm:ss")}`;
  newToken.username = username;
  newToken.token = crc32(username).toString(16);
  newToken.expires = `${format(expires, "yyyy-MM-dd HH:mm:ss")}`;

  fs.readFile(__dirname + "/json/token.json", "utf8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);
    tokens.push(newToken);
    userTokens = JSON.stringify(tokens);
  });
}
