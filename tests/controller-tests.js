describe("Controller", () => {
  describe("#getListView", () => {
    var mockList;
    var listView = {
      converted:
        "<ul><li><div><a href='#notes/0'>hello this is a note</a></div></li><li><div><a href='#notes/1'>this is a second not</a></div></li></ul>"
    };

    var controller = new Controller(mockList, listView, "app");

    expect.isEqual(
      "gets the list view",
      controller.getListView(),
      "<ul><li><div><a href='#notes/0'>hello this is a note</a></div></li><li><div><a href='#notes/1'>this is a second not</a></div></li></ul>"
    );
  });

  describe("#outputListView", () => {
    var mockList;
    var listView = {
      converted: "<ul><li><div>hello this is another note</div></li></ul>"
    };
    var body = document.getElementsByTagName("body");
    var mockElement = document.createElement("span");
    mockElement.id = "test";
    body.item(0).appendChild(mockElement);

    var controller = new Controller(mockList, listView, "test");

    expect.isEqual(
      "outputs the note as HTML to the page",
      controller.outputListView(),
      "<ul><li><div>hello this is another note</div></li></ul>"
    );

    body.item(0).removeChild(mockElement);
  });

    describe("#getNoteView", () => {
      var list = {
        notelist: [
          {
            text: "hello this is a note"
          },
          {
            text: "this is a second note that is longer"
          }
        ]
      };
      var listView = {
        converted:
          "<ul><li><div><a href='#notes/0'>hello this is a note</a></div></li><li><div><a href='#notes/1'>this is a second not</a></div></li></ul>"
      };

      var controller = new Controller(list, listView, "app");

      expect.isEqual(
        "gets the first note view",
        controller.getNoteView(1),
        "<div>this is a second note that is longer</div>"
      );
    });

  describe("#outputNoteView", () => {
    var mockList;
    var mockListView;
    var body = document.getElementsByTagName("body");
    var mockElement = document.createElement("span");
    mockElement.id = "test";
    body.item(0).appendChild(mockElement);

    var controller = new Controller(mockList, mockListView, "test");
    var mockNote = "<div>hello this is another note</div>";

    expect.isEqual(
      "outputs the note as HTML to the page",
      controller.outputNoteView(mockNote),
      "<h2><u>Your Note</u></h2><div>hello this is another note</div>"
    );

    body.item(0).removeChild(mockElement);
  });
});
