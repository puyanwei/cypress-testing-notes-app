(() => {
  var list = new List();
  var listView = new ListView(list);
  listView.convert();
  var controller = new Controller(list, listView, "app");
  controller.submitListener(list);
  controller.outputListView();
  controller.hashChangeListener();
})();
