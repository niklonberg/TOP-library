export default class BookForm {
  constructor() {}

  static formCreateBookObj(bookFormEleCollection) {
    const bookFormInputs = Array.from(bookFormEleCollection).filter(
      (ele) => ele.tagName === "INPUT"
    );

    const bookObj = {};

    bookFormInputs.forEach((ele) => {
      if (ele.type === "checkbox") {
        bookObj[ele.name] = ele.checked;
      } else {
        bookObj[ele.name] = ele.value;
      }
    });

    return bookObj;
  }
}
