describe("ListView", () => {
  describe("#convert", function() {
    var mockList = { notelist: [{ text: "hello" }, { text: "goodbye" }] };
    var listView = new ListView(mockList);

    listView.convert(mockList.notelist);
    expect.isEqual(
      "converts the multiple notes into a HTML list",
      listView.converted,
      "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>"
    );
  });
});
