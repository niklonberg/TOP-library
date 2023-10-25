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
    let templateString = "";

    for (const key of this.filterUndefinedKeys()) {
      if (key === "title") {
        templateString += `<h3>${this[key]}</h3>`;
      } else {
        templateString += `<p>${this[key]}</p>`;
      }
    }
    return templateString;
  }
}
