(function(exports) {
  function NoteController(list, listView) {
    this.list = list;
    this.listView = listView;
  }

  NoteController.prototype.getListView = function() {
    return this.listView.converted;
  };

  NoteController.prototype.outputHTML = function() {
    document.getElementById("app").innerHTML = this.getListView();
  };

  exports.NoteController = NoteController;
})(this);
