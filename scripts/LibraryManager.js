export default class Library {
  constructor() {}

  insertBooks(library, element) {
    library.forEach((book) => {
      element.insertAdjacentHTML(
        "beforeend",
        `<li>${book.title}, ${book.author}, ${book.pages}, ${book.finishedReading}</li>`
      );
    });
  }
}
