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
    const templateString = "";

    for (const key in bookObj) {
      if (bookObj[key] !== undefined) {
      }
    }
  }
}
