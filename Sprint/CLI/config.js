const fs = require("fs");
const path = require("path");
const config = require("./config.json");

// fs.readFile(__dirname + "/config.json", (error, data) => {
//   if (error) throw error;
//   //    console.log(data);
//   //    console.log(JSON.parse(data));
//   let cfg = JSON.parse(data);
//   //update an existing attribute
//   cfg.main = "test";
//   //add a new attribute
//   cfg.database = "testdb";
//   //console.log(cfg);

//   data = JSON.stringify(cfg, null, 2);
//   fs.writeFile(__dirname + "/config.json", data, (err) => {
//     if (err) throw err;
//     console.log("Data written to file");
//   });
// });
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

function updateConfig() {
  fs.appendFile(
    path.join(__dirname, "./config.json", (err) => {
      if (err) console.log(err);
      console.log("updated the config file");
    })
  );
}
module.exports = { configApp, updateConfig };
