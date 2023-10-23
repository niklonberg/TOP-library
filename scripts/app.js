const log = console.log;
const userLibrary = [];

function Book(title, author, pages = 0, finishedReading = false) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.finishedReading = finishedReading);
}

function addBookToLibrary(array, book) {
  array.push(book);
}

const book1 = new Book("The Shining", "Stephen King");
const book2 = new Book("Lord of the Rings", "Tolkien", 300, true);

addBookToLibrary(userLibrary, book1);
addBookToLibrary(userLibrary, book2);

log(userLibrary);
