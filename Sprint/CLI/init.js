const fs = require("fs");
// const fsPromises = require("fs").promises;
const path = require("path");

let init = `
myapp init <command>

Usage:

init --all          creates the folder structure and config file
init --mk           creates the folder structure
init --cat          creates the config file with default settings`;

function initializeApp() {
  const myArgs = process.argv.slice(2);

  switch (myArgs[1]) {
    case "--all":
      createInit();
      createConfig();
      if (DEBUG) console.log("initializeApp.All() --all");
      break;
    case "--mk":
      createInit();
      if (DEBUG) console.log("initializeApp.All() --mk");
      break;
    case "--cat":
      createConfig();
      if (DEBUG) console.log("initializeApp.createInit() --cat");
      console.log("config ran");
      break;
    default:
      if (DEBUG) console.log("initializeApp - default");
  }
}

function createInit() {
  if (fs.existsSync(path.join(__dirname, "./views"))) {
    fs.writeFile(path.join(__dirname, "views", "init.txt"), init, (err) => {
      if (err) console.log(err);
      else if (DEBUG) console.log("Data written to init.txt file.");
    });
  } else {
    fs.mkdir(path.join(__dirname, "./views"), (err) => {
      if (err) console.log(err);
      else if (DEBUG) console.log("Directory created.");
    });
  }
}

const config = {
  name: "AppConfigCLI",
  version: "1.0.0",
  description: "The Command Line Interface (CLI) for the MyApp.",
  main: "myapp.js",
  superuser: "adm1n",
  database: "testdb",
};

function createConfig() {
  try {
    let data = json.stringify(config, null, 2);
    if (!fs.existsSync(path.join(__dirname, "config.json"))) {
      fs.writeFile("config.json", data, (err) => {
        if (DEBUG) console.log("Data written to config.json file.");
      });
    } else {
      if (DEBUG) console.log("config.json file already exists.");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  initializeApp,
  config,
};
