// expect.isEqual("testing that hi works", exclaim("hi"), "hi!!!!!");
//
// describe(
//   "testinsdgnlsdg",
//   expect.isNull("testing that null is indeed null", null)
// );
//
// expect.isTrue("testing that one plus one is two", 1 + 1 == 2);
var notes = new Notes();

describe(
  "#initialize",
  expect.isEqual("array is zero length", notes.list.length, 0)
);
