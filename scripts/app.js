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
const currentCollectionDisplay = document.querySelector("#book-display");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const addBookBtn = document.querySelector("#add-book-btn");
const closeBookModalBtn = document.querySelector("#close-book-modal");

/* event listeners */
currentCollectionDisplay.addEventListener("click", (event) => {
  log(event);
  if (event.target.classList.contains("remove-book-btn")) {
    const parent = event.target.parentElement;
    log("you clicked the delete btn");
    log("dataset id: ", parent.dataset.id);
    LibraryManager.deleteBook(userLibrary, parent.dataset.id);
    log(userLibrary);
    parent.remove();
  }

  if (event.target.classList.contains("toggle-readStatus-btn")) {
    const parent = event.target.parentElement;
    const readStatus = LibraryManager.toggleBookReadStatus(
      userLibrary,
      parent.dataset.id
    );
    if (!readStatus) {
      event.target.textContent = "Not Read";
    } else {
      event.target.textContent = "Read";
    }
  }
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBookObj = BookForm.formCreateBookObj(bookForm.elements);
  const newBook = new Book(newBookObj);

  LibraryManager.addBook(userLibrary, newBook);
  LibraryManager.insertLatestBookCard(userLibrary, currentCollectionDisplay);

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
LibraryManager.addBook(userLibrary, book1);
LibraryManager.addBook(userLibrary, book2);
LibraryManager.addBook(userLibrary, book2);
LibraryManager.addBook(userLibrary, book1);
LibraryManager.showCurrentBookCollection(userLibrary, currentCollectionDisplay);
log(Book.numberOfBooks);
