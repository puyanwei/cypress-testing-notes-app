(function(exports) {
  function Controller(list, listView, tag) {
    this.list = list;
    this.listView = listView;
    this.tag = tag;
  }

  Controller.prototype.getListView = function() {
    return this.listView.converted;
  };

  Controller.prototype.outputListView = function() {
    return (document.getElementById(this.tag).innerHTML = this.getListView());
  };

  Controller.prototype.outputNoteView = function(noteOutput) {
    return (document.getElementById(this.tag).innerHTML = noteOutput);
  };

  Controller.prototype.getNoteView = function(number) {
    return "<div>" + this.list.notelist[number].text + "</div>";
  };

  Controller.prototype.makeURLChangeToSeeNote = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  Controller.prototype.showNoteForCurrentPage = function() {
    var noteOutput = this.getNoteView(this.getNoteIdFromUrl());
    this.outputNoteView(noteOutput);
  };

  Controller.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  //
  // function showNote(animal) {
  //   document.getElementById("animal").innerHTML = animal;
  // }

  // ------

  //   makeURLChangeShowIndividualNote()
  //
  // function makeURLChangeShowIndividualNote() {
  //   window.addEventListener("hashchange", showIndividualNote);
  // }
  //
  // function showIndividualNote() {
  //   controller.showNote(getNoteIdFromUrl(window.location), element);
  // }
  //
  // function getNoteIdFromUrl(location) {
  //   return location.hash.split("#")[1].split("/")[1]
  // }
  //
  // function submitListen() {
  //   document.getElementById("text").addEventListener("submit", function(event) {
  //     console.log(event);
  //     event.preventDefault();
  //   })
  // };
  //
  // submitListen();
  // }

  exports.Controller = Controller;
})(this);
