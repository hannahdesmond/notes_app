const NotesApi = require('./notesApi');

// // This makes `fetch` available to our test
// // (it is not by default, as normally `fetch` is only
// // available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Notes API class', () => {
  const api = new NotesApi();

  it('calls fetch and loads a note', async () => {
    fetch.mockResponseOnce(JSON.stringify(
      ["a note of jibberish"]
      ));

    api.loadNotes((serverInfo) => {
      expect(serverInfo[0]).toBe("a note of jibberish");
    });
  });
  
  require('jest-fetch-mock').enableMocks()

  it('creates a note and saves it in the backend', async () => {
    fetch.mockResponseOnce(JSON.stringify(
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "content": "Remember to reflect on my progress this week!" }),
      }
    ));
    
    
    api.uploadNote("irrelevant", (serverResponse) => {
      expect(serverResponse.body).toBe("Remember to reflect on my progress this week!");
    });
  });
});  
