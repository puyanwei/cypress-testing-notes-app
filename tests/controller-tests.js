describe("NoteController", () => {
  describe("#getListView", () => {
    var list = { text: "hello this is a note" };
    var listView = {
      converted: "<ul><li><div>hello this is a note</div></li></ul>"
    };
    var noteController = new NoteController(list, listView, "app");

    expect.isEqual(
      "gets the list view",
      noteController.getListView(),
      "<ul><li><div>hello this is a note</div></li></ul>"
    );
  });

  describe("#outputHTML", () => {
    var list = { text: "hello this is another note" };
    var listView = {
      converted: "<ul><li><div>hello this is another note</div></li></ul>"
    };
    var body = document.getElementsByTagName("body");
    var mockElement = document.createElement("span");
    mockElement.id = "test";
    body.item(0).appendChild(mockElement);

    var noteController = new NoteController(list, listView, "test");

    expect.isEqual(
      "outputs the note as HTML to the page",
      noteController.outputHTML(),
      "<ul><li><div>hello this is another note</div></li></ul>"
    );

    body.item(0).removeChild(mockElement);
  });
});
