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

  describe("#createListView", () => {});
});
