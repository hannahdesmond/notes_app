const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

console.log('The notes app is running!')

const model = new NotesModel();
const api = new NotesApi();
const view = new NotesView(model, api);

api.loadNotes((notes) => {

  // this method concats the notes from the server
  // and the notes in the model and saves them in the model

  model.setNotes(notes);
  // this is displaying before the resopnse 
  // comes back from the server

  view.displayNotes();
  
});


