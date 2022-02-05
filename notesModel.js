class NotesModel{
  constructor() {
    this.notes = []
  };

  getNotes = () => {
    return this.notes
    // running in index.js and not returning server notes
  }; 

  addNote = (note) => {
    this.notes.push(note)
  }; 

  setNotes = (notes_array) => {
    this.notes = this.notes.concat(notes_array)
  };

  reset = () => {
    this.notes = []
  }; 

};

module.exports = NotesModel;