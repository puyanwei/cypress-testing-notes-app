(function(exports) {
  "use strict";

  function View(list) {
    this.list = list;
  }

  View.prototype.convert = function(note) {
    var output = [];
    this.list.forEach(function(element) {
      output += "<li><div>" + element.text + "</div></li>";
    });
    return "<ul>" + output + "</ul>";
  };

  exports.View = View;
})(this);
