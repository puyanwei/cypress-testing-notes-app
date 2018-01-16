(function(exports) {
  function Controller(list, listView, tag) {
    this.list = list;
    this.listView = listView;
    this.tag = tag;
  }

  Controller.prototype.getListView = function() {
    return this.listView.converted;
  };

  Controller.prototype.outputListView = function() {
    return (document.getElementById(this.tag).innerHTML = this.getListView());
  };

  Controller.prototype.getNoteView = function(number) {
    var noteView = new NoteView(this.list.notelist[number]);
    return noteView.convert();
  };

  Controller.prototype.outputNoteView = function(noteOutput) {
    return (document.getElementById(this.tag).innerHTML =
      "<h2><u>Your Note</u></h2>" + noteOutput);
  };

  exports.Controller = Controller;
})(this);
