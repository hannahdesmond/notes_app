/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {
  it('should display 2 notes on website', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // Creating a new view, with dependency injected model with two notes.
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    const view = new NotesView(model);
    view.displayNotes();
  
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  it('add note to website by inputting value and clicking button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // Creating a new view, with dependency injected model with two notes.
    const model = new NotesModel();
    const view = new NotesView(model);
    const noteInputEl = document.querySelector("#note-input")
    const buttonEl = document.querySelector("#add-note-button")

    noteInputEl.value = "I am a note"
    buttonEl.click()

    expect(document.querySelector("div.note").innerText).toBe("I am a note");
  });


  it('add notes twice to website outputs 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // Creating a new view, with dependency injected model with two notes.
    const model = new NotesModel();
    const view = new NotesView(model);
    const noteInputEl = document.querySelector("#note-input");
    const buttonEl = document.querySelector("#add-note-button");

    noteInputEl.value = "I am a note1";
    buttonEl.click();
    noteInputEl.value = "I am a note1's brother";
    buttonEl.click();

    expect(document.querySelectorAll("div.note").length).toBe(2);
  });
});