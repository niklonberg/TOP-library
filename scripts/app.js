const log = console.log;

/* imports */
import Book from "./Book.js";
import Library from "./LibraryManager.js";
import BookForm from "./FormManager.js";

/* class instantiation */
const LibraryManager = new Library();

const book1 = new Book({ title: "The Shining", author: "Stephen King" });
const book2 = new Book({
  title: "Lord of the Rings",
  author: "Tolkien",
  pages: 300,
  language: "English",
  publishedDate: "10-01-1992",
  finishedReading: false,
});
log(book1);
log(book2);
log(book1.filterUnwantedKeys());

/* dom element references */
const userLibraryDisplay = document.querySelector("#user-library");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const addBookBtn = document.querySelector("#add-book-btn");
const closeBookModalBtn = document.querySelector("#close-book-modal");

/* event listeners */
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBookObj = BookForm.formCreateBookObj(bookForm.elements);
  const newBook = new Book(newBookObj);

  LibraryManager.addBookToBookCollection(userLibrary, newBook);
  LibraryManager.insertLatestBook(userLibrary, userLibraryDisplay);

  log(newBook);
  log(userLibrary);
  bookForm.reset();
  bookModal.close();
});

addBookBtn.addEventListener("click", () => {
  bookModal.showModal();
});

closeBookModalBtn.addEventListener("click", () => {
  bookModal.close();
});

/* library instantiation */
const userLibrary = [];
LibraryManager.addBookToBookCollection(userLibrary, book1);
LibraryManager.addBookToBookCollection(userLibrary, book2);
LibraryManager.showCurrentBookCollection(userLibrary, userLibraryDisplay);
log(Book.numberOfBooks);
