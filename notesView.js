//const { div } = require("prelude-ls");

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteInputEl = document.querySelector("#note-input");
    this.buttonEl = document.querySelector("#add-note-button");

    this.buttonEl.addEventListener('click', () => {
      this.addNote();
      this.clearNotes()
      this.displayNotes();
      this.noteInputEl.value = ""
    })
  };

  addNote() {
    this.model.addNote(this.noteInputEl.value);
  };

  displayNotes() {
    this.model.getNotes().forEach(note => {
      let div = document.createElement('div');
      div.className = "note";
      div.innerText = note;
      this.mainContainerEl.append(div);
    });
  };

  clearNotes() {
    const notes = document.querySelectorAll("div.note");
    notes.forEach(note => {
      note.remove();
    });
  };
};

module.exports = NotesView;