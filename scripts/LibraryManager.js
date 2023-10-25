export default class Library {
  constructor() {
    this.bookCollections = {};
  }

  addBook(bookCollection, book) {
    bookCollection.push(book);
  }

  deleteBook(bookCollection, dataID) {
    /* save deleted book so it can be undone? */
    bookCollection.splice(dataID, 1);
  }

  showCurrentBookCollection(bookCollection, element) {
    element.innerHTML = "";
    this.insertBookCollection(bookCollection, element);
  }

  insertBookCollection(bookCollection, element) {
    bookCollection.forEach((book) => {
      this.insertBookCard(book, element);
    });
  }

  insertBookCard(book, element) {
    element.insertAdjacentHTML(
      "beforeend",
      `<li data-id=${book.bookID}>
        ${book.createHTMLElements()}
      </li>`
    );
  }

  insertLatestBookCard(bookCollection, element) {
    this.insertBookCard(bookCollection.at(-1), element);
  }
}
