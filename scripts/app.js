const log = console.log;

/* imports */
import Book from "./Book.js";
import Library from "./LibraryManager.js";

/* class instantiation */
const LibraryManager = new Library();
const book1 = new Book("The Shining", "Stephen King");
const book2 = new Book("Lord of the Rings", "Tolkien", 300, true);

/* library instantiation */
const userLibrary = [];

/* dom element references */
const userLibraryDisplay = document.querySelector("#user-library");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const addBookBtn = document.querySelector("#add-book-btn");
const closeBookModalBtn = document.querySelector("#close-book-modal");

book1.addBookToLibrary(userLibrary);
book2.addBookToLibrary(userLibrary);

LibraryManager.insertBooks(userLibrary, userLibraryDisplay);

addBookBtn.addEventListener("click", () => {
  bookModal.showModal();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  log(bookForm.elements);

  const newBook = new Book(
    bookForm.elements.title.value,
    bookForm.elements.author.value
  );

  addBookToLibrary(userLibrary, newBook);
  insertBooks(userLibrary, userLibraryDisplay);

  bookModal.close();
});

closeBookModalBtn.addEventListener("click", () => {
  bookModal.close();
});
