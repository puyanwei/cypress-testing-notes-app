(() => {
  var list = new List();
  list.add("Fave drink: Seltzer");
  list.add("Fave drink: Singapore Sling");
  list.add("Fave drink: Cosmopolitan");
  var listView = new ListView(list);
  listView.convert();
  var controller = new Controller(list, listView, "app");
  controller.outputListView();
  controller.makeURLChangeToSeeNote();
})();
