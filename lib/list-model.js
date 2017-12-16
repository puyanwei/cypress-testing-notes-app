(function(exports) {
  "use strict";

  function List() {
    this.notelist = [];
  }

  List.prototype.add = function(text) {
    let note = new Note(text);
    this.notelist.push(note);
  };

  exports.List = List;
})(this);
