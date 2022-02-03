(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes = () => {
          return this.notes;
        };
        addNote = (note) => {
          this.notes.push(note);
        };
        reset = () => {
          this.notes = [];
        };
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.noteInputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            this.addNote();
            this.clearNotes();
            this.displayNotes();
            this.noteInputEl.value = "";
          });
        }
        addNote() {
          this.model.addNote(this.noteInputEl.value);
        }
        displayNotes() {
          this.model.getNotes().forEach((note) => {
            let div = document.createElement("div");
            div.className = "note";
            div.innerText = note;
            this.mainContainerEl.append(div);
          });
        }
        clearNotes() {
          const notes = document.querySelectorAll("div.note");
          notes.forEach((note) => {
            note.remove();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running!");
  var model = new NotesModel();
  var view = new NotesView(model);
  model.addNote("Spoons");
  model.addNote("Hello Notes");
  model.addNote("So many notes");
  view.displayNotes();
  console.log(model.getNotes());
})();
