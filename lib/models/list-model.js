(function(exports) {
  "use strict";

  function List() {
    this.notelist = [];
  }

  List.prototype.add = function(text) {
    let id = this.notelist.length;
    let note = new Note(text, id);
    this.notelist.push(note);
  };

  exports.List = List;
})(this);
