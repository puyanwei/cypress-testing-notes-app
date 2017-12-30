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
    noteView.convert(note);
    expect.isEqual(
      "converts the note into HTML",
      noteView.converted,
      "<div>hello this is a single note</div>"
    );
  });
});
