(function(exports) {
  "use strict";

  function List() {
    this.notelist = [];
  }

  List.prototype.add = function(text) {
    this.notelist.push(text);
  };

  exports.List = List;
})(this);
