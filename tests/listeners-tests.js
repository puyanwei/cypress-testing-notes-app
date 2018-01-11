describe("Listeners", () => {
  describe("#addTextToList", () => {
    var body = document.getElementsByTagName("body");
    var mockForm = document.createElement("form");
    mockForm.id = "text";
    var mockTextarea = document.createElement("textarea");
    var mockButton = document.createElement("input");
    mockButton.setAttribute("type", "submit");
    mockForm.appendChild(mockTextarea);
    mockForm.appendChild(mockButton);
    body.item(0).appendChild(mockForm);

    var list = { add: "" };

    listeners = new Listeners(list);
    listeners.addTextToList(list);
    console.log(noteText);
    console.log(list);
    expect.isEqual("gets the text from the text box", listeners.list, "hello");
  });
});
