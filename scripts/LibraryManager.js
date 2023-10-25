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
    element.insertAdjacentHTML(
      "beforeend",
      `<li>
        ${book.createHTMLElements()}
      </li>`
    );
  }

  addBookToLibrary(library, book) {
    library.push(book);
  }
}
