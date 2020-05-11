import axios from 'axios'

export default {
  // Gets all books
  getTemplate: function () {
    return axios.get('api/templates/' + filename)
  },
  // Gets the book with the given id
  getFiles: function () {
    return axios.get('api/files')
  }, // retrieves weblist file browser (type, filename, size, last modified, created, url)
  // Deletes the book with the given id
  updateFile: function (filename) {
    return axios.delete('api/files/' + filename)
  },
  // Saves a book to the database
  saveFile: function (fileData) {
    return axios.post('api/files', fileData)
  }
  // delete request Filename
}
