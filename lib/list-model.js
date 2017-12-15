(function(exports) {
  "use strict";

  function List() {
    this.notesList = [];
  }

  List.prototype.create = function() {
    note = new Note();
    this.notesList.push(note);
  };

  exports.List = List;
})(this);

