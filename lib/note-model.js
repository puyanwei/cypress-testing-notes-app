var Notes = function() {
  this.list = [];
};

Notes.prototype.addNote = function() {
  note = new Note();
  this.list.push(note);
};
