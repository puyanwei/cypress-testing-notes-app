(function() {
  var note = new Note("hello");
  var list = new List();
  list.add(note);
  var listView = new ListView(list);
  var controller = new NoteController(list, listView);
})();
