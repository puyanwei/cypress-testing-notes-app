(function() {
  var note = "Favourite drink: seltzer";
  var list = new List();
  list.add(note);
  var view = new View(list);
  // var element = document.getElementById("app");

  var noteController = new NoteController(list, view);
  // noteController.display();
})();
