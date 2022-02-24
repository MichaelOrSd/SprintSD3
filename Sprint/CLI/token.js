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

const myArgs = process.argv.slice(2);

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

    fs.writeFile(__dirname + "/json/token.json", userTokens, (err) => {
      if (err) console.log(err);
      else {
        console.log(`New token ${newTokens.token} was created for ${username}.`);
        myEmitter.emit("log", "tokens.newToken()", "INFO", `New token ${newTokens.token} was created for ${username}.`);
      }
    });
  });
  return newToken.token;
}

function updateToken(argv) {
  if (DEBUG) console.log("token.updateToken()");
  if (DEBUG) console.log(argv);
  fs.readFile(__dirname + "/json/tokens.json", "utf8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);
    tokens.forEach((obj) => {
      if (obj.username === argv[3]) {
        if (DEBUG) console.log(obj);
        switch (argv[2]) {
          case "p":
          case "P":
            obj.phone = argv[4];
            break;
          case "e":
          case "E":
            obj.email = argv[4];
            break;
          default:
        }
        if (DEBUG) console.log(obj);
      }
    });
    userTokens = JSON.stringify(tokens);
    fs.watchFile(__dirname + "/json/tokens.json", userTokens, (err) => {
      if (err) console.log(err);
      else {
        console.log(`Token record for ${argv[3]} was updated with ${argv[4]}.`);
        myEmitter.emit("log", "tokens.updateToken()", "INFO", `Token ${argv[3]} was updated.`);
      }
    });
  });
}

function fetchRecord(username) {
  if (DEBUG) console.log("token.fetchRecord()");
  fs.readFile(__dirname + "/json/token.json", "utf8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);
    tokens.forEach((obj) => {
      if (obj.username === username) {
        console.log(obj);
        myEmitter.emit("log", "token.fetchRecord()", "INFO", `Token record for ${username} was displayed.`);
      }
    });
  });
}

function searchToken() {
  if (DEBUG) console.log("token.searchToken()");
  myEmitter.emit("log", "token.searchToken()", "INFO", `Token was found for xxx.`);
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function tokenApp() {
  if (DEBUG) console.log("tokenApp()");
  myEmitter.emit("log", "token.tokenApp()", "INFO", `Token option was called by CLI.`);

  switch (myArgs[1]) {
    case "--count":
      tokenCount();
      break;
    case "--list":
      tokenList();
      break;
    case "--new":
      newToken(myArgs[2]);
      break;
    case "--update":
      updateToken(myArgs); // may need to be [2] after myArgs.
      break;
    case "--fetch":
      fetchRecord(myArgs[2]);
      break;
    case "--search":
      searchToken();
      break;
    case "--help":
    case "--h":
    default:
      fs.readFile(__dirname + "/views/token.txt", (error, data) => {
        if (error) throw error;
        console.log(data.toString());
      });
      myEmitter.emit("log", "token.tokenApp()", "INFO", `Token help was displayed.`);
  }
}

module.exports = {
  tokenApp,
  newToken,
};
