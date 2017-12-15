(function(exports) {
  "use strict";

  function Notes() {
    this.list = [];
  }

  Notes.prototype.add = function(text) {
    let note = text;
    this.list.push(note);
  };

  exports.Notes = Notes;
})(this);
