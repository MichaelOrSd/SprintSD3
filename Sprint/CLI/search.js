const searchList = (data) => {
  const dlist = require("./DoubleLinkedList");
  const list = new dlist.DoublyLinkedList();

  var json = JSON.parse(require("fs").readFileSync("tokens.json", "utf 8"));

  json.forEach((obj) => {
    list.insertFirst(obj);
  });
  for (var i = 0; i <= list.size() - 1; i++) {
    testString = list.getElementAt(i).element;
    var testCreated = testString["created"];
    var testUsername = testString["username"];
    var testEmail = testString["email"];
    var testPhone = testString["phone"];
    var testToken = testString["token"];
    var testExpires = testString["expires"];
    var testConfirmed = testString["confirmed"];

    if (testCreated == created) return created;

    if (testUsername == username) return username;

    if (testEmail == email) return email;

    if (testPhone == phone) return phone;

    if (testToken == token) return token;

    if (testExpires == expires) return expires;

    if (testConfirmed == confirmed) return confirmed;
  }
};
searchList();
