const log = console.log;

import Book from "./Book.js";

const userLibraryArray = [];
const userLibrary = document.querySelector("#user-library");
const addBookBtn = document.querySelector("#add-book-btn");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const closeBookModalBtn = document.querySelector("#close-book-modal");

const book1 = new Book("The Shining", "Stephen King");
const book2 = new Book("Lord of the Rings", "Tolkien", 300, true);

addBookToLibrary(userLibraryArray, book1);
addBookToLibrary(userLibraryArray, book2);

log(userLibraryArray);
log(userLibrary);

insertBooks(userLibraryArray, userLibrary);

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

  addBookToLibrary(userLibraryArray, newBook);
  insertBooks(userLibraryArray, userLibrary);

  bookModal.close();
});

closeBookModalBtn.addEventListener("click", () => {
  bookModal.close();
});
