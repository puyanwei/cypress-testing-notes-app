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

  exports.Controller = Controller;
})(this);
