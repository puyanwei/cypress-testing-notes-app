(function(exports) {
  "use strict";

  function View() {
    View.prototype.convert = function(text) {
      var output = "<br><ul>" + text + "</br></ul>";
      return output;
    };
  }

  exports.View = View;
})(this);
