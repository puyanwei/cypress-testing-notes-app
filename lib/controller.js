(function(exports) {
  function Controller(list, listView, tag) {
    this.list = list;
    this.listView = listView;
    this.tag = tag;
  }

  Controller.prototype.getListView = function() {
    return this.listView.converted;
  };

  Controller.prototype.outputHTML = function() {
    return (document.getElementById(this.tag).innerHTML = this.getListView());
  };

  Controller.prototype.getNoteView = function(number) {
    return "<div>" + this.list.notelist[number].text + "</div>";
  };

  exports.Controller = Controller;
})(this);
