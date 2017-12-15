describe("#initialize", function() {
  var noteslist = new NotesList();
  expect.isEqual("blank array is loaded", noteslist.list.length, 0);
});

describe("#create", function() {
  var list = new List();
  notelist.add();
  expect.isEqual("can create and store a note", noteslist.list, "hello");
});
