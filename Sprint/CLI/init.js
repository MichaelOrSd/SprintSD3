const fs = require("fs");
const path = require("path");

let init = `

myapp init <command>

usage:

myapp init --all    creates the folder structure and config files for the app.
myapp init --mk     creates the folder structure 
myapp init --cat    creates the config file with default settings`;

function initializeApp() {
  const myArgs = process.argv.slice(2);

  // Use this line of code to send the third and beyond arguments to the console.
  //if(myArgs.length >1) console.log('thte init.args: ', myArgs);
  switch (myArgs[1]) {
    case "--all":
      if (DEBUG) console.log("initializeApp.All() --all");
      break;
    case "--cat":
      createInit();
      createConfig();
      if (DEBUG) console.log("initializeApp.createInit() --cat");
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
    fs.mkdir(path.join(__dirname, "views"), (err) => {
      if (err) console.log(err);
      else if (DEBUG) console.log("Directory created.");
    });
  }
}

const config = {
  name: "myapp",
  version: "1.0.0",
  description: "myapp is a simple app to manage your data.",
  main: "myapp.js",
  superuser: "admin",
};

function createConfig() {
  try {
    let data = JSON.stringify(config, null, 2);
    if (fs.existsSync(path.join(__dirname, "config.jason"))) {
      fs.writeFile("config.json", data, (err) => {
        if (DEBUG) console.log("config.json file already exists");
      });
    } else {
      if (DEBUG) console.log("config.json file already exists");
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  initializeApp,
};
