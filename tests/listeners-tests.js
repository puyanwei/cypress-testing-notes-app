describe("Listeners", () => {
  describe("#addTextToList", () => {
    // var text = { elements: [{ value: "hello" }, 2] };
    var body = document.getElementsByTagName("body");
    var mockElement = document.createElement("span");
    mockElement.id = "text";
    mockElement.value = "hello";
    body.item(0).appendChild(mockElement);

    var list = [{ add: "" }];

    listeners = new Listeners(list);
    console.log(text.elements[0].value);
    listeners.addTextToList(list);
    expect.isEqual("gets the text from the text box", listeners.list, "hello");
  });
});
