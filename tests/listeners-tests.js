describe("Listeners", () => {
  describe("#addTextToList", () => {
    var text = { elements: [{ value: "hello" }, 2] };
    var list = [{ add: "" }];
    var listView = {};

    listeners = new Listeners(list);
    listeners.addTextToList(list);
    expect.isEqual("gets the text from the text box", listeners.list, "hello");
  });
});
