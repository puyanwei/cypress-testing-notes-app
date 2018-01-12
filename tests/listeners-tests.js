describe("Listeners", () => {
  describe("#addTextToList", () => {
    var body = document.getElementsByTagName("body");
    var mockForm = document.createElement("form");
    mockForm.id = "text";
    var mockTextArea = document.createElement("textarea");
    mockTextArea.innerText = "hello this is a test";
    var mockButton = document.createElement("input");
    mockButton.setAttribute("type", "submit");
    mockForm.appendChild(mockTextArea);
    mockForm.appendChild(mockButton);
    body.item(0).appendChild(mockForm);

    list = new List();
    listeners = new Listeners(list);

    listeners.addTextToList();
    expect.isEqual(
      "gets the text from the text box and adds it to the list",
      listeners.list.notelist[0].text,
      "hello this is a test"
    );

    body.item(0).removeChild(mockForm);
  });

  describe("#createListView", () => {
    list = new List();
    listeners = new Listeners(list);
    list.add("this is a test sentence for the list view test");
    list.add("this is another test for the list");
    listeners.createListView(list);
    expect.isEqual(
      "creates a list view from the list",
      listeners.listView.converted,
      "<ul><li><div><a href='#notes/0'>this is a test sente</a></div></li><li><div><a href='#notes/1'>this is another test</a></div></li></ul>"
    );
  });
});
