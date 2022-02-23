// code to turn on or off the console.log statements
// set to true to turn on, false to turn off
global.DEBUG = true;

const fs = require("fs");
const path = require("path");
const { config } = require("./init");
const fileName = "./config.json";
const file = require(fileName);

// switch statement to help with config options
// function configApp() {
const myArgs = process.argv.slice(2);
if (DEBUG) if (myArgs.length > 1) console.log("the myapp.args: ", myArgs);
switch (myArgs[1]) {
  case "--reset":
    if (DEBUG) console.log("Config.JSON has been reset.");
    configReset();
    break;
  case "--set":
    if (DEBUG) console.log("The Config.JSON has been updated.");
    configSet();
    break;
  case "--show":
  default:
    configShow();
}
// }

// resets the config.json file to its original state.
function configReset() {
  let figdata = JSON.stringify(config, null, 2);
  fs.writeFile(__dirname + "/config.json", figdata, (err) => {
    if (err) throw err;
    if (DEBUG) console.log("Config.JSON reset to default.");
  });
}

// updates whichever piece of data is in the config.json file you indicate.
// const myArgs = process.argv.slice(2); // *** may need to be deleted ***
function configSet() {
  let match = false;
  fs.readFile(__dirname + "/config.json", (err, data) => {
    if (err) throw err;
    if (DEBUG) console.log(JSON.parse(data));
    let configKey = JSON.parse(data);
    for (let key of Object.keys(configKey)) {
      if (key === myArgs[2]) {
        configKey[key] = myArgs[3];
        match = true;
      }
    }
    if (DEBUG) console.log(configKey);
    data = JSON.stringify(configKey, null, 2);
    fs.writeFile(__dirname + "/config.json", data, (err) => {
      if (err) return console.log(err);
      if (DEBUG) console.log("writing to " + fileName);
    });
  });
}

// shows the current information in the config.json file.
function configShow() {
  fs.readFile(__dirname + "/config.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });
}

// module.exports = { configApp };
