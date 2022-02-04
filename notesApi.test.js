const NotesApi = require('./notesApi');

// // This makes `fetch` available to our test
// // (it is not by default, as normally `fetch` is only
// // available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Notes API class', () => {
  it('calls fetch and loads a note', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(
      ["a note of jibberish"]
      ));

    api.loadNotes((serverInfo) => {
      expect(serverInfo[0]).toBe("a note of jibberish");
    });
  });
})
