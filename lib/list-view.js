(function(exports) {
  "use strict";

  function ListView(list) {
    this.list = list;
    this.converted;
  }

  ListView.prototype.convert = function() {
    var output = [];
    this.list.notelist.forEach(function(element) {
      output += "<li><div>" + element.text + "</div></li>";
    });
    this.converted = "<ul>" + output + "</ul>";
  };

  ListView.prototype.shorten = function(string) {
    if (string.length > 20) {
      return string.substring(0, 20);
    }
    return string;
  };

  exports.ListView = ListView;
})(this);
