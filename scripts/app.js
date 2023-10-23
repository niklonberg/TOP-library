const log = console.log;
const userLibraryArray = [];
const userLibrary = document.querySelector("#user-library");
const addBookBtn = document.querySelector("#add-book-btn");
const bookModal = document.querySelector("#new-book-modal");
const bookForm = document.querySelector("#book-form");
const closeBookModalBtn = document.querySelector("#close-book-modal");

function Book(title, author, pages = 0, finishedReading = false) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.finishedReading = finishedReading);
}

function addBookToLibrary(array, book) {
  array.push(book);
}

function insertBooks(array, element) {
  array.forEach((ele) => {
    element.insertAdjacentHTML(
      "beforeend",
      `<li>${ele.title}, ${ele.author}, ${ele.pages}, ${ele.finishedReading}</li>`
    );
  });
}

const book1 = new Book("The Shining", "Stephen King");
const book2 = new Book("Lord of the Rings", "Tolkien", 300, true);

addBookToLibrary(userLibraryArray, book1);
addBookToLibrary(userLibraryArray, book2);

log(userLibraryArray);
log(userLibrary);

insertBooks(userLibraryArray, userLibrary);

addBookBtn.addEventListener("click", () => {
  log("clicked");
  bookModal.showModal();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  log("i submitted");

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
