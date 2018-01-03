describe("ListView", () => {
  describe("#convert", function() {
    var mockList = {
      notelist: [{ text: "hello", id: 0 }, { text: "goodbye", id: 1 }]
    };
    var listView = new ListView(mockList);

    listView.convert(mockList.notelist);
    expect.isEqual(
      "converts the multiple notes into a HTML list",
      listView.converted,
      "<ul><li><div><a href='http://localhost:8080#notes/0'>hello</a></div></li><li><div><a href='http://localhost:8080#notes/1'>goodbye</a></div></li></ul>"
    );

    var longMockList = {
      notelist: [
        { text: "hello wow its very nice to meet you", id: 0 },
        { text: "this is a note of something i would like to write", id: 1 }
      ]
    };
    var listView = new ListView(longMockList);

    listView.convert(longMockList);
    expect.isEqual(
      "limits the string to 20 characters and then converts the multiple notes into a HTML list",
      listView.converted,
      "<ul><li><div><a href='http://localhost:8080#notes/0'>hello wow its very n</a></div></li><li><div><a href='http://localhost:8080#notes/1'>this is a note of so</a></div></li></ul>"
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
