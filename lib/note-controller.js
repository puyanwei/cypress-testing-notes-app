(function(exports) {
  function NoteController(list, listView) {
    this.list = list;
    this.listView = listView;
  }

  NoteController.prototype.getListView = function() {
    return this.listView.convert(this.list);
  };

  NoteController.prototype.outputHTML = function() {
    document.getElementById("app").innerHTML = this.getListView();
  };

  exports.NoteController = NoteController;
})(this);
