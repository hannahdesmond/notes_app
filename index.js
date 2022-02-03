const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
console.log('The notes app is running!')

const model = new NotesModel();
const view = new NotesView(model);

model.addNote("Spoons")
model.addNote("Hello Notes")
model.addNote("So many notes")

view.displayNotes();

console.log(model.getNotes())