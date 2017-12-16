describe("View #convert", function() {
  var view = new View();
  expect.isTrue(
    "converts the note into a HTML list",
    view.convert("hello") === "<br><ul>hello</br></ul>"
  );
});
