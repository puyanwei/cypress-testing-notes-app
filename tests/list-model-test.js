describe("#initialize", function() {
  var list = new List();
  expect.isEqual("blank array is loaded", list.notesList.length, 0);
});

describe("#create", function() {
  var list = new List();
  var text = "Hello this is a note.";
  noteList.create(text);
  expect.isEqual("can create and store a note", list.notesList, "hello");
});
