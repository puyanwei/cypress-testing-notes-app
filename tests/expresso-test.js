describe("#testing-expresso", function() {
  expect.isEqual("testing that hi works", exclaim("hi"), "hi!!!!!");
  expect.isNull("testing that null is indeed null", null);
  expect.isTrue("testing that one plus one is two", 1 + 1 == 2);
});

describe("#initialize", function() {
  notes = new Notes();
  expect.isEqual("array is zero length", notes.list.length, 0);
});
