export default class Book {
  static numberOfBooks = 0;

  constructor(bookObj) {
    for (const key in bookObj) {
      this[key] = bookObj[key];
    }
    this.bookID = Book.numberOfBooks;
    Book.numberOfBooks++;
  }

  filterUnwantedKeys() {
    return Object.keys(this).filter(
      (key) => this[key] !== undefined && key !== "bookID"
    );
  }

  createHTMLElements() {
    const propertyConfig = {
      title: (value) => `<h3>${value}</h3>`,
      author: (value) => `<p>Author: ${value}</p>`,
      pages: (value) => `<p>Pages: ${value}</p>`,
      language: (value) => `<p>Language: ${value}</p>`,
      publishedDate: (value) => `<p>Published: ${value}</p>`,
      finishedReading: (value) => {
        let buttonText = "Read";
        if (!value) {
          buttonText = "Not Read";
        }
        return `<button>${buttonText}</button>`;
      },
    };

    let templateString = "";

    for (const key of this.filterUnwantedKeys()) {
      const value = this[key];
      templateString += propertyConfig[key](value);
    }

    const deleteBookBtn = `<button class="remove-book-btn">Delete</button>`;
    templateString += deleteBookBtn;

    return templateString;
  }
}
