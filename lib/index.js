(() => {
  var list = new List();
  list.add("Favourite drink: seltzer");
  var listView = new ListView(list);
  var controller = new NoteController(list, listView);
  controller.outputHTML();
})();
