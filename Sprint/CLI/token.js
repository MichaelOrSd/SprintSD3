const crc32 = require("crc/crc32");
const { format } = require("date-fns");

const fs = require("fs");
const path = require("path");

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let username = "team2";
let crc = crc32(username).toString(16);
let now = new Date();
let expires = addDays(now, 3);

let newToken = JSON.parse(`{
    "created": "2019-09-30 12:00:00",
    "username": "username",
    "email": "user@example.com",
    "phone": "555-555-5555",
    "token": "token",
    "expires": "2019-10-03 12:00:00",
    "confirmed": "tbd"
}`);

newToken.created = `${format(now, "yyyy-MM-dd HH:mm:ss")}`;
newToken.username = username;
newToken.email = "team2@example.com";
newToken.phone = "555-555-5555";
newToken.token = crc;
newToken.expires = `${format(expires, "yyyy-MM-dd HH:mm:ss")}`;

let userTokens = fs.readFileSync("tokens.json", "utf8");
let tokens = JSON.parse(userTokens);
tokens.push(newToken);
console.log(tokens);
userTokens = JSON.stringify(tokens);
console.log(userTokens);

fs.writeFile("tokens.json", userTokens, (err) => {
  if (err) console.log(err);
  else console.log(fs.readFileSync("tokens.json", "utf8"));
});
