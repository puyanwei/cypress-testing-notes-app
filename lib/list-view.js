(function(exports) {
  "use strict";

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.convert = function(note) {
    var output = [];
    this.list.notelist.forEach(function(element) {
      output += "<li><div>" + element.text + "</div></li>";
    });
    return "<ul>" + output + "</ul>";
  };

  exports.ListView = ListView;
})(this);
