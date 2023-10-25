export default class Library {
  constructor() {
    this.bookCollections = {};
  }

  showCurrentBookCollection(bookCollection, element) {
    element.innerHTML = "";
    this.insertBookCollection(bookCollection, element);
  }

  insertBookCollection(bookCollection, element) {
    for (let i = 0; i < bookCollection.length; i++) {
      element.insertAdjacentHTML(
        "beforeend",
        `<li data-id=${i}>
          ${bookCollection[i].createHTMLElements()}
        </li>`
      );
    }
  }

  insertLatestBook(bookCollection, element) {}

  addBookToBookCollection(bookCollection, book) {
    bookCollection.push(book);
  }
}
