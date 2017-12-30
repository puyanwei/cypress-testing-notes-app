(function(exports) {
  "use strict";

  function NoteView() {}

  NoteView.prototype.convert = function(note) {
    return "<div>" + note + "</div>";
  };

  exports.NoteView = NoteView;
})(this);
