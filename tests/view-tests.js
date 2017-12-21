var list = new List();

describe("View", () => {
  var view = new View();

  describe("#convert", function() {
    list.add("hello");
    list.add("goodbye");
    expect.isEqual(
      "converts the note into a HTML list",
      view.convert(list.notelist),
      "<ul>hello</ul><ul>goodbye</ul>"
    );
  });
});
