(function(exports) {
  "use strict";

  function View() {
    this.test = "hello there";

    View.prototype.convert = function(note) {
      var output = [];
      list.notelist.forEach(function(element) {
        output += "<ul>" + element.text + "</ul>";
      });
      return output;
    };
  }

  exports.View = View;
})(this);
