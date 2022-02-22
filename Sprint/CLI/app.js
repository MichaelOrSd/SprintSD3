/* 

file name: app.js
purpose: the main routines to start the initialization app

commands:
myapp init --all.....            creates the folder structure and config files for the
myapp init --mk......            creates the folder structure and config files for
myapp init --cat.....            creates the config file with default settings
myapp config --show..            displays a list of the current config settings
myapp config --reset.            resets the config file with default settings
myapp config --set...            sets a sspecific config settings
myapp token --count..            displays a count of the token created
myapp token --new <username>     generates a token for a given username, saves tokens to the json file 
myapp token --fetch <username>   fetches a token for a given username
myapp token --search u <username>
myapp token --search e <email>
myapp token --search p <phone> 

created Date: 21 Feb 2022
Authors: Michael O'Reilly, Roderick Wells
Revision: 1.0 
Revissions:
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
    //configApp();
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
