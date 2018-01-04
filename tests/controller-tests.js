describe("Controller", () => {
  describe("#getListView", () => {
    var list = [
      {
        text: "hello this is a note"
      },
      {
        text: "this is a second note that is longer"
      }
    ];
    var listView = [
      {
        converted: "<ul><li><div>hello this is a note</div></li></ul>"
      },
      {
        converted:
          "<ul><li><div>this is a second note that is longer</div></li></ul>"
      }
    ];

    var controller = new Controller(list, listView, "app");

    expect.isEqual(
      "gets the list view",
      controller.getListView(),
      "<ul><li><div>hello this is a note</div></li></ul>"
    );
  });

  describe("#getNoteView", () => {
    expect.isEqual("gets the note view", controller.getNoteView(), "");
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

    var controller = new Controller(list, listView, "test");

    expect.isEqual(
      "outputs the note as HTML to the page",
      controller.outputHTML(),
      "<ul><li><div>hello this is another note</div></li></ul>"
    );

    body.item(0).removeChild(mockElement);
  });
});
