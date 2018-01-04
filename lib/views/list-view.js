(function(exports) {
  "use strict";

  function ListView(list) {
    this.list = list;
    this.converted;
  }

  ListView.prototype.convert = function() {
    var output = "";
    this.list.notelist.forEach(element => {
      var string = element.text;
      var id = element.id;
      string = this.shorten(string);
      output +=
        "<li><div><a href='http://localhost:8000#notes/" +
        id +
        "'>" +
        string +
        "</a></div></li>";
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
