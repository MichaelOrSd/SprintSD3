const fs = require("fs");
const path = require("path");
const config = require("./config.json");
const fileName = "./config.json";
const file = require(fileName);

// switch statement to help with config options
function configApp() {
  const myArgs = process.argv.slice(2);
  switch (myArgs[1]) {
    case "--reset":
      break;
    case "--set":
      break;
    case "--update":
      if (DEBUG) console.log(updateConfig());
    case "--show":
    default:
      if (DEBUG) console.log("These are the Config Files", config);
  }
}

function configReset() {
  if (fs.existsSync(path.join(__dirname, "./config.json"))) {
    fs.appendFile("./config.json");
  }
}

// updates a part of the config.json file.
file.name = "new value";
function updateConfig() {
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file, null, 2));
    console.log("writing to " + fileName);
  });
}
// hjdfhosuhfouih
module.exports = { configApp, updateConfig };
