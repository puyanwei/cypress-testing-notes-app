(() => {
  var list = new List();
  var listView = new ListView(list);
  listView.convert();
  var listeners = new Listeners(list, listView);
  var controller = new Controller(list, listView, "app");
  console.log(controller.listView);
  listeners.submit(list, listView);
  listeners.hashChange();
})();
