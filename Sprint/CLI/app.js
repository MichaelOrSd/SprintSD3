/* 

file name: app.js
purpose: the main routines to start the initialization app

commands:
app init --all.....            creates the folder structure and config files for the
app init --mk......            creates the folder structure and config files for
app init --cat.....            creates the config file with default settings
app config --show..            displays a list of the current config settings
app config --reset.            resets the config file with default settings
app config --set...            sets a specific config settings
app token --count..            displays a count of the token created
app token --new <username>     generates a token for a given username, saves tokens to the json file 
app token --fetch <username>   fetches a token for a given username
app token --search u <username>
app token --search e <email>
app token --search p <phone> 

created Date: 21 Feb 2022
Authors: Michael O'Reilly, Roderick Wells
Revision: 1.0 
Revisions:
date, Author, description; 
1. 21 Feb 2022 by Michael O'Reilly
   The first revision description should go here.
2. 


*/

// code to turn on or off the console.log statements
// set to true to turn on, false to turn off
global.DEBUG = true;

const fs = require("fs");
const { initializeApp } = require("./init.js");
const { configApp } = require("./config.js");

const myArgs = process.argv.slice(2);
if (DEBUG) if (myArgs.length > 1) console.log("the myapp.args: ", myArgs);

switch (myArgs[0]) {
  case "init":
  case "i":
    if (DEBUG) console.log(myArgs[0], " - initialize the app.");
    initializeApp();
    break;
  case "config":
  case "c":
    if (DEBUG) console.log(myArgs[0], " - display the config file.");
    configApp();
    break;
  case "token":
  case "t":
    if (DEBUG) console.log(myArgs[0], " - generate a user token.");
    //tokenApp();
    break;
  case "help":
  case "h":
  default:
    fs.readFile(__dirname + "/usage.txt", (error, data) => {
      if (error) throw error;
      console.log(data.toString());
    });
}
