const userLibrary = [];

function Book(title, author, pages = 0, finishedReading = false) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.finishedReading = finishedReading);
}

function addBookToLibrary() {}
