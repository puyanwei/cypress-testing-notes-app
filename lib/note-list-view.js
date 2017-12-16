(function(exports) {
  "use strict";

  function View() {
    View.prototype.convert = function(array) {
      var output = "";
      list.notelist.forEach(function(note) {
        output += note.show() + " ";
      });
      return output;
    };
  }

  exports.View = View;
})(this);
