export default class Library {
  constructor() {
    /* add support for multiple collections later maybe*/
    this.bookCollections = [];
  }

  addBook(bookCollection, book) {
    bookCollection.push(book);
  }

  deleteBook(bookCollection, dataID) {
    /* save deleted book so it can be undone? */
    bookCollection.splice(dataID, 1);
  }

  createAndAppendBookBtn(element) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "Add book";
    li.id = "add-book-btn";
    li.appendChild(btn);
    element.appendChild(li);
  }

  toggleBookReadStatus(bookCollection, dataID) {
    let readStatus;
    bookCollection.forEach((book) => {
      if (book.bookID === Number.parseInt(dataID)) {
        book.finishedReading = !book.finishedReading;
        readStatus = book.finishedReading;
      }
    });

    return readStatus;
  }

  showCurrentBookCollection(bookCollection, element) {
    /* element.innerHTML = "" necessary? */
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
