describe("List", () => {
  describe("#initialize", () => {
    var list = new List();
    expect.isEqual("blank array is loaded", list.notelist.length, 0);
  });

  describe("#add", () => {
    var list = new List();
    list.add("hello");
    expect.isEqual(
      "can create and store a note",
      list.notelist[0].text,
      "hello"
    );
    list.add("goodbye");
    expect.isEqual(
      "second note says goodbye",
      list.notelist[1].text,
      "goodbye"
    );
    expect.isEqual("there are two notes in the list", list.notelist.length, 2);
  });
  list.add("what a note!");
  expect.isEqual(
    "gives the note an id number automatically",
    list.notelist[3].id,
    3
  );
});
