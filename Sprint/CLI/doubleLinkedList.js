// .sort method the list of json data to allow for better human searching.
// this is what a good programmer would do to aid future programmers
// .sort((a, b) => a.username.localeCompare(b.username));
// Got the idea from Stephan Squires which show just how much or a good coder/programmer he really is.
// He's litterally thinking far beyond the level of this class.

// input json data objs DLL
// write fns to allow us to call this DLL.js file
// insert fns

// Doubly linked list search.

/*

steps for writing this code:

write and store json data (objects) in a file.
read and display json data (objects) from a file.
insert json data (objects) into a file.
call the function from the app.js file.

insert the data
write = logg the data to the file.

scarch the data
read the data
display the data

*/



const fs = require("fs");
const { initializeApp } = require("./init.js");
const { configApp } = require("./config.js");
const { tokenApp } = require("./token.js");


function insertPerson(obj) {
  // insert the data
  // write = logg the data to the file.
  fs.writeFile(__dirname + "/data.json", JSON.stringify(obj), (error) => {
    if (error) throw error;
    console.log("inserted data to the file.");
  });
}

module.exports = {
  initializeApp,
  configApp,
  tokenApp,











class Person {
  constructor(created, username, email, phone, token, expires, confirmed) {
    this.created = created;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.token = token;
    this.expires = expires;
    this.confirmed = confirmed;
  }
}
class Node {
  // linked list node to hold data, and pointers to next and previous nodes
  constructor(person) {
    this.person = person;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  // init the DLL
  constructor() {
    this.value = 0;
    this.head = null;
    this.tail = null;
  }

  insert(person) {
    let node = new Node(person),
      current = this.head,
      previous;
    if (!this.head) {
      // if list is empty, make the node the head and tail
      this.head = node; // head and tail are the same
      this.tail = node; // head and tail are the same
    } else {
      node.previous = tail; // set the new node's previous to the current tail
      tail.next = node; // head and tail are the same
      tail = node; // head and tail are the same
    }
    this.value++;
  }

  getItemAt(item) {
    // get the item at the given index
    var tokenData = require("./tokens.json");

    let current = this.head; // start at the head or beginning to search forward
    if (this.head === null) {
      console.log("No Data in List");
      return null;
    }
    while (current != null) {
      if (current.username.includes(item) || current.phone.includes(item)) {
        tokenData.add(current.Person);
      }
      current = current.next;
    }
    return tokenData;
  }
  main() {
    //reads input from command line and parses it t search for item
    const readline = require("readline");
    var r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    r1.on("line", function (line) {
      itemTosearch = line;
      while (!itemTosearch.equals("q")) {
        sortedSet = this.searchItem(itemTosearch);
        if (sortedSet.size() != 0) {
          for (i = o; i <= sortedSet.size(); i++) {
            //console.log(sortedSet)
          }
        } else {
          console.log("No search results found...");
        }
        console.log("\nEnter search item(or q to quit:");
      }
      r1.close;
    });
  }
}
