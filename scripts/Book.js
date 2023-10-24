export default class Book {
  constructor(title, author, pages = 0, finishedReading = false) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.finishedReading = finishedReading);
  }

  addBookToLibrary(array) {
    array.push(this);
  }

  insertBooks(array, element) {
    array.forEach((ele) => {
      element.insertAdjacentHTML(
        "beforeend",
        `<li>${ele.title}, ${ele.author}, ${ele.pages}, ${ele.finishedReading}</li>`
      );
    });
  }
}
