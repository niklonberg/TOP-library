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

  static removeAddBookCard() {
    document.querySelector("#add-book-card").remove();
  }

  static createAddBookCard(element) {
    const li = document.createElement("li");
    /* remove btn elements later when you style the li */
    const btn = document.createElement("button");
    btn.textContent = "Add book";
    li.id = "add-book-card";
    li.appendChild(btn);
    element.appendChild(li);
  }
}
