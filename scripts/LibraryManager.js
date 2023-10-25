export default class Library {
  constructor() {
    this.bookCollections = {};
  }

  showCurrentBookCollection(bookCollection, element) {
    element.innerHTML = "";
    this.insertBookCollection(bookCollection, element);
  }

  insertBook(book, element) {
    element.insertAdjacentHTML(
      "beforeend",
      `<li data-id=${book.bookID}>
        ${book.createHTMLElements()}
      </li>`
    );
  }

  insertBookCollection(bookCollection, element) {
    bookCollection.forEach((book) => {
      this.insertBook(book, element);
    });
  }

  insertLatestBook(bookCollection, element) {
    this.insertBook(bookCollection.at(-1), element);
  }

  addBookToBookCollection(bookCollection, book) {
    bookCollection.push(book);
  }
}
