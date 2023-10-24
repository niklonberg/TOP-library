const log = console.log;

/* imports */
import Book from "./Book.js";
import Library from "./LibraryManager.js";

/* class instantiation */
const LibraryManager = new Library();
const book1 = new Book("The Shining", "Stephen King");
const book2 = new Book("Lord of the Rings", "Tolkien", 300, true);

/* dom element references */
const userLibraryDisplay = document.querySelector("#user-library");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const addBookBtn = document.querySelector("#add-book-btn");
const closeBookModalBtn = document.querySelector("#close-book-modal");

/* event listeners */
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  log(bookForm.elements);

  const newBook = new Book(
    bookForm.elements.title.value,
    bookForm.elements.author.value
  );

  LibraryManager.addBookToLibrary(userLibrary, newBook);
  LibraryManager.insertLatestBook(newBook, userLibraryDisplay);

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
LibraryManager.addBookToLibrary(userLibrary, book1);
LibraryManager.addBookToLibrary(userLibrary, book2);
LibraryManager.populateLibraryDisplay(userLibrary, userLibraryDisplay);
