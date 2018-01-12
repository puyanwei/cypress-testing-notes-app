(function(exports) {
  function Listeners(list) {
    this.list = list;
    this.listView;
  }

  Listeners.prototype.submit = function() {
    document.getElementById("text").addEventListener("submit", event => {
      event.preventDefault();
      this.addTextToList();
      this.createListView(this.list);
      this.outputNewListView();
    });
  };

  Listeners.prototype.addTextToList = function() {
    var noteText = text.elements[0].value;
    this.list.add(noteText);
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
    var controller = new Controller(this.list, this.listView, "app");
    var noteNumber = window.location.hash.split("#notes/")[1];
    var noteContent = controller.getNoteView(noteNumber);
    controller.outputNoteView(noteContent);
  };

  exports.Listeners = Listeners;
})(this);
