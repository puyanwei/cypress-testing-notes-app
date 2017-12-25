var list = new List();

describe("View", () => {
  var view = new View();

  describe("#convert", function() {
    list.add("hello");
    list.add("goodbye");
    expect.isEqual(
      "converts the multiple note into a HTML list",
      view.convert(list.notelist),
      "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>"
    );
  });
});
