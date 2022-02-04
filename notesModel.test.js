const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  const model = new NotesModel();

  it('should return an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  });

  it('should return an array with added notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('should return an empty array after reset', () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });

  it('should add array of notes to existing notes', () => {
    model.addNote('Buy milk');
    model.setNotes(["note trapped in an array"]);
    expect(model.getNotes()).toEqual(
      ["Buy milk", "note trapped in an array"]
    );
  });
});