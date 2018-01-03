(() => {
  var list = new List();
  list.add("Favourite drink: seltzer");
  var listView = new ListView(list);
  listView.convert();
  var controller = new NoteController(list, listView, "app");
  console.log(controller.listView.converted);
  controller.outputHTML();
})();
