(function(exports) {
  "use strict";

  function NoteController(list, view) {
    this.list = list;
    this.view = view;
  }

  NoteController.prototype.display = function() {
    this.list.add(this.note);
    this.view.convert(this.list.notelist);
  };

  exports.NoteController = NoteController;
})(this);
