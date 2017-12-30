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

describe("NoteView", () => {
  describe("#convert", function() {
    var noteModelMock = { text: "hello this is a single note" };
    var noteView = new NoteView(noteModelMock);

    expect.isEqual(
      "converts the note into HTML",
      noteView.convert(),
      "<div>hello this is a single note</div>"
    );
  });
});
