export default class Library {
  constructor() {
    this.bookCollections = {};
  }

  populateLibraryDisplay(library, element) {
    element.innerHTML = "";
    library.forEach((book) => {
      element.insertAdjacentHTML(
        "beforeend",
        `<li>${book.title}, ${book.author}, ${book.pages}, ${book.finishedReading}</li>`
      );
    });
  }

  insertLatestBook(library, book) {}

  addBookToLibrary(library, book) {
    library.push(book);
  }
}
