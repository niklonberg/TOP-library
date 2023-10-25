export default class Book {
  constructor(bookObj) {
    for (const key in bookObj) {
      this[key] = bookObj[key];
    }
  }

  filterUndefinedKeys() {
    return Object.keys(this).filter((key) => this[key] !== undefined);
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

    for (const key of this.filterUndefinedKeys()) {
      const value = this[key];
      templateString += propertyConfig[key](value);
    }

    return templateString;
  }
}
