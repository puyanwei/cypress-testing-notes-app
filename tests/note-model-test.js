notes = new Notes();

describe("#initialize", function() {
  expect.isEqual("blank array is loaded", notes.list.length, 0);
});
// expect.isEqual("adds a note to the list", notes.addNote(), "hello");
