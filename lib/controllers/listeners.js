(function(exports) {
  function Listeners(list, listView) {
    this.list = list;
    this.listView = listView;
  }

  Listeners.prototype.hashChange = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  Listeners.prototype.showNote = function() {
    var noteNumber = window.location.hash.split("#notes/")[1];
    var noteContent = this.getNoteView(noteNumber);
    this.outputNoteView(noteContent);
  };

  Listeners.prototype.submit = function(list, listView) {
    document.getElementById("text").addEventListener("submit", event => {
      event.preventDefault();
      var noteText = text.elements[0].value;
      list.add(noteText);
      var listView = new ListView(list);
      listView.convert();
      this.listView = listView;
      var controller = new Controller(this.list, this.listView, "app");
      controller.getListView();
      controller.outputListView();
    });
  };
  exports.Listeners = Listeners;
})(this);
