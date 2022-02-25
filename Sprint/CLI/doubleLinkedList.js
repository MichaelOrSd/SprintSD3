// Doubly linked list search.

class Data {
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
  constructor(person) {
    this.person = person;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
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
      this.head = node;
      this.tail = node;
    } else {
      node.previous = tail;
      tail.next = node;
      tail = node;
    }
    this.value++;
  }

  getItemAt(item) {
    var tokenData = require("./tokens.json");
    var data = tokenData;

    let current = this.head;
    if (this.head === null) {
      console.log("No Data in List");
      return null;
    }
    while (current != null) {
      if (current.username.includes(item) || current.phone.includes(item)) {
        data.add(current.Data);
      }
      current = current.next;
    }
    return data;
  }
}
