(() => {
  var list = new List();
  var listeners = new Listeners(list);
  listeners.submit();
  listeners.hashChange();
})();
