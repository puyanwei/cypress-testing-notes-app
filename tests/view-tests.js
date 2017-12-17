describe("View #convert", function() {
  var view = new View();
  expect.isEqual(
    "converts the note into a HTML list",
    view.convert(list.notelist),
    "<br><ul>hello</ul></br>"
  );
});
