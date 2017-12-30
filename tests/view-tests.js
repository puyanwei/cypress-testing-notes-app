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

  describe("#shorten", function() {
    var mockList = { notelist: [{ text: "hello" }, { text: "goodbye" }] };
    var listView = new ListView(mockList);
    var longNote =
      "Hello there this sentence might have more then 20 characters";
    var shortNote = "This is a short note";

    expect.isEqual(
      "cuts the string to 20 characters if it is more",
      listView.shorten(longNote),
      "Hello there this sen"
    );
    expect.isEqual(
      "keeps the string the same if it is not over 20 characters",
      listView.shorten(shortNote),
      "This is a short note"
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
