describe("#initialize", function() {
  var notes = new Notes();
  expect.isEqual("blank array is loaded", notes.list.length, 0);
});

describe("#create", function() {
  var notes = new Notes();
  notes.add("hello");
  expect.isEqual("can create and store a note", notes.list[0], "hello");
});
