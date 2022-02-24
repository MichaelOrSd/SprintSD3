// global.DEBUG = true;

const fs = require("fs");
// const fsPromises = require("fs").promises;
const path = require("path");

let init = `
myapp init <command>

Usage:

init --all          creates the folder structure and run again to create init.txt file
init --mk           creates the views folder structure
init --cat          creates the config file with default settings`;

function initializeApp() {
  const myArgs = process.argv.slice(2);

  switch (myArgs[1]) {
    case "--all":
      createFolder();
      if (DEBUG) console.log("initializeApp.All() --all");
      break;
    case "--mk":
      createFolder(); // makes the views folder
      if (DEBUG) console.log("initializeApp.All() --mk");
      break;
    case "--cat":
      createFile(); // creates the config.json file
      if (DEBUG) console.log("initializeApp.createFile() --cat");
      console.log("config ran");
      break;
    default:
      if (DEBUG) console.log("initializeApp - default");
  }
}

function createFolder() {
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

const configTemp = {
  name: "AppConfigCLI",
  version: "1.0.0",
  description: "The Command Line Interface (CLI) for the MyApp.",
  main: "myapp.js",
  superuser: "adm1n",
  database: "testdb",
};

function createFile() {
  try {
    let data = JSON.stringify(configTemp, null, 2);
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
  configTemp,
};
