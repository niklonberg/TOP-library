export default class Book {
  constructor(bookObj) {
    for (const key in bookObj) {
      this[key] = bookObj[key];
    }
  }

  tempMethod() {
    const bookFormElementsArray = [bookFormEleCollection.elements];
    bookFormElementsArray.forEach((ele) => {
      console.log(ele);
      /* if (ele.type === "input") {
        return;
      } */
    });
  }
}
