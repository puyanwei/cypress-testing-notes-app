(() => {
  var list = new List();
  var listeners = new Listeners(list);
  listeners.submit(list);
  listeners.hashChange();
})();
