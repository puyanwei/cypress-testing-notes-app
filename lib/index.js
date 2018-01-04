(() => {
  var list = new List();
  list.add("Favourite drink: Seltzer");
  list.add("Favourite drink: Singapore Sling");
  var listView = new ListView(list);
  listView.convert();
  var controller = new Controller(list, listView, "app");
  controller.outputHTML();
})();
