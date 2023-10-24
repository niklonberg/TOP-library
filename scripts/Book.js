export default class Book {
  constructor(bookObj) {
    for (const key in bookObj) {
      this[key] = bookObj[key];
    }
  }
}
