class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
  };

  uploadNote(note, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
};

const call = (data) => {
  console.log(data)
}

module.exports = NotesApi;
