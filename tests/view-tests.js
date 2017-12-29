describe("ListView", () => {
  describe("#convert", function() {
    var mockList = { notelist: [{ text: "hello" }, { text: "goodbye" }] };
    var listView = new ListView(mockList);
    expect.isEqual(
      "converts the multiple note into a HTML list",
      listView.convert(mockList.notelist),
      "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>"
    );
  });
});
