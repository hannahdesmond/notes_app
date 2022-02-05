//const { div } = require("prelude-ls");

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteInputEl = document.querySelector("#note-input");
    this.buttonEl = document.querySelector("#add-note-button");

    this.buttonEl.addEventListener('click', () => {
      this.addNote();
      this.clearNotes()
      this.displayNotes();
      this.noteInputEl.value = ""

    });
  };

  addNote() {
    // this.model.addNote(this.noteInputEl.value);
    this.api.uploadNote(this.noteInputEl.value, (response) => {
      // these few lines are the callback 
      // called in upload note
      // response is the data that is the response from
      // the promise called here: "callback(data) in uploadNote"
      
      // add the code to add the notes to the page
      console.log('Note added!');
      this.model.setNotes(response)
      this.view.displayNotes()
    })
  };

  displayNotes() {
    console.log("this.model.getNotes inside displayNotes method: ")
    console.log(this.model.getNotes())
    this.model.getNotes().forEach(note => {
      if (note != null) {
        let div = document.createElement('div');
        div.className = "note";
        div.innerText = note;
        this.mainContainerEl.append(div);
        console.log("result of fetch request")
      }
    });
  };

  clearNotes() {
    const notes = document.querySelectorAll("div.note");
    notes.forEach(note => {
      note.remove();
    });
  };
}

module.exports = NotesView;