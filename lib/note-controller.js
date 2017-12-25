(function(exports) {
  function NoteController(list, listView) {
    this.list = list;
    this.listView = listView;
  }

  NoteController.prototype.getList = function() {
    return this.list;
  };

  NoteController.prototype.getListView = function() {
    return this.listView;
  };

  exports.NoteController = NoteController;
})(this);
