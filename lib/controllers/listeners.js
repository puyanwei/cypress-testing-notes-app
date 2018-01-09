(function(exports) {
  function Listeners(list, listView) {
    this.list = list;
    this.listView = listView;
  }

  Listeners.prototype.submit = function(list, listView) {
    document.getElementById("text").addEventListener("submit", event => {
      event.preventDefault();
      this.getText(list);
      this.createListView(list);
      this.outputNewListView();
    });
  };

  Listeners.prototype.getText = function(list) {
    var noteText = text.elements[0].value;
    list.add(noteText);
  };

  Listeners.prototype.createListView = function(list) {
    var listView = new ListView(list);
    listView.convert();
    this.listView = listView;
  };

  Listeners.prototype.outputNewListView = function() {
    var controller = new Controller(this.list, this.listView, "app");
    controller.getListView();
    controller.outputListView();
  };

  Listeners.prototype.hashChange = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  Listeners.prototype.showNote = function() {
    var noteNumber = window.location.hash.split("#notes/")[1];
    var noteContent = this.getNoteView(noteNumber);
    this.outputNoteView(noteContent);
  };

  exports.Listeners = Listeners;
})(this);
