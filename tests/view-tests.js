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
    var note = "hello this is a single note";
    var noteView = new NoteView();

    expect.isEqual(
      "converts the note into HTML",
      noteView.convert(note),
      "<div>hello this is a single note</div>"
    );
  });
});
