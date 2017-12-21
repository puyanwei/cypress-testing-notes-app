(function(exports) {
  "use strict";

  function View() {
    this.test = "hello there";

    View.prototype.convert = function(note) {
      var output = [];
      list.notelist.forEach(function(element) {
        output += "<li><div>" + element.text + "</div></li>";
      });
      return "<ul>" + output + "</ul>";
    };
  }

  exports.View = View;
})(this);
