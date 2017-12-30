(function(exports) {
  function NoteController(list, listView, tag) {
    this.list = list;
    this.listView = listView;
    this.tag = tag;
  }

  NoteController.prototype.getListView = function() {
    return this.listView.converted;
  };

  NoteController.prototype.outputHTML = function() {
    return (document.getElementById(this.tag).innerHTML = this.getListView());
  };

  exports.NoteController = NoteController;
})(this);
