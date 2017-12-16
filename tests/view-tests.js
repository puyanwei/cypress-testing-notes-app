describe("#convert", function() {
  var list = new List();
  var view = new View();
  list.add("hello");
  expect.isEqual(
    "converts the note into a HTML list",
    view.convert(list),
    '<br><ul>"hello"</ul></br>'
  );
});
