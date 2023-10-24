export default class Library {
  constructor() {}

  insertBooks(bookCollection, element) {
    bookCollection.forEach((book) => {
      element.insertAdjacentHTML(
        "beforeend",
        `<li>${book.title}, ${book.author}, ${book.pages}, ${book.finishedReading}</li>`
      );
    });
  }
}
