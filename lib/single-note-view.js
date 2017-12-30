(function(exports) {
  "use strict";

  function NoteView(noteModel) {
    this.note = noteModel;
  }

  NoteView.prototype.convert = function() {
    return "<div>" + this.note.text + "</div>";
  };

  exports.NoteView = NoteView;
})(this);
