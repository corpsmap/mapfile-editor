import axios from 'axios'

export default {
  // Gets all books
  getTemplate: function () {
    return axios.get('/templates/' + filename)
  },
  // Gets the book with the given id
  getFiles: function () {
    return axios.get('/files')
  }, // retrieves weblist file browser (type, filename, size, last modified, created, url)
  // Deletes the book with the given id
  updateFile: function (filename) {
    return axios.delete('/files/' + filename)
  },
  // Saves a book to the database
  saveFile: function (fileData) {
    return axios.post('/files', fileData)
  }
  // delete request Filename
}
