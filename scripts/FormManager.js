export default class BookForm {
  constructor() {}

  static formCreateBookObj(bookFormEleCollection) {
    const bookFormInputs = Array.from(bookFormEleCollection).filter(
      (ele) => ele.tagName === "INPUT"
    );

    const bookObj = {};

    bookFormInputs.forEach((ele) => {
      bookObj[ele.name] = ele.value;
    });

    return bookObj;
  }
}
