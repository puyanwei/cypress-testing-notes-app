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
      list.notelist[0].show(),
      "hello"
    );
    list.add("goodbye");
    expect.isEqual(
      "second note says goodbye",
      list.notelist[1].show(),
      "goodbye"
    );
    expect.isEqual("there are two notes in the list", list.notelist.length, 2);
  });
});
