(function(exports) {
  "use strict";

  function View() {
    this.test = "hello there";

    View.prototype.convert = function(note) {
      var output = [];
      list.notelist.forEach(function(element) {
        output.push("<br><ul>" + element.text + "</ul></br>");
      });
      console.log(output);
      return output;
    };
  }

  exports.View = View;
})(this);
