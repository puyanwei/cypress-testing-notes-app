var list = new List();
var view = new View();

describe("View #convert", function() {
  list.add("hello");
  expect.isEqual(
    "converts the note into a HTML list",
    view.convert(list.notelist),
    "<ul>hello</ul>"
  );
});
