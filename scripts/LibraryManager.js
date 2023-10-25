export default class Library {
  constructor() {
    this.bookCollections = {};
  }

  populateLibraryDisplay(library, element) {
    element.innerHTML = "";
    library.forEach((book) => {
      this.insertLatestBook(book, element);
    });
  }

  insertLatestBook(book, element) {
    /* needs to only add key values that have a value */
    element.insertAdjacentHTML(
      "beforeend",
      `<li>
        <h3>${book.title}</h3>
        ${book.author}, ${book.pages}, ${book.finishedReading}
      </li>`
    );
  }

  addBookToLibrary(library, book) {
    library.push(book);
  }
}
