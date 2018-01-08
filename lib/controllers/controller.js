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
    return (document.getElementById(this.tag).innerHTML = noteOutput);
  };

  Controller.prototype.hashChangeListener = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  Controller.prototype.showNote = function() {
    var noteNumber = window.location.hash.split("#notes/")[1];
    var noteContent = this.getNoteView(noteNumber);
    this.outputNoteView(noteContent);
  };

  Controller.prototype.submitListener = function() {
    document.getElementById("text").addEventListener("submit", event => {
      event.preventDefault();
      console.log(event);
    });
  };

  exports.Controller = Controller;
})(this);
