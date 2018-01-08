(function(exports) {
  function Listeners() {}

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

      console.log(this.list);
      console.log(this.listView);
    });
  };
  exports.Listeners = Listeners;
})(this);
