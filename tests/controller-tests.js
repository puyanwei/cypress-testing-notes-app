describe("NoteController", () => {
  var list = { text: "hello this is a note" };
  var listView = "<ul><li><div>hello this is a note</div></li></ul>";
  var noteController = new NoteController(list, listView);

  describe("#getListView", () => {
    expect.isEqual(
      "gets the list view",
      noteController.getListView(),
      "<ul><li><div>hello this is a note</div></li></ul>"
    );
  });
});
