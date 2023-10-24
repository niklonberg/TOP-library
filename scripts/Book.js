export default class Book {
  constructor(title, author, pages = 0, finishedReading = false) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.finishedReading = finishedReading);
  }

  addBookToLibrary(array) {
    array.push(this);
  }
}
