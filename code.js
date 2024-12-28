// All of the books will be stored here.

import { addBookCardToDOM } from "./add-to-dom.js";

export class Book {
  static books = [];
  static getBooks = () => books;

  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    // The html reference is to be able to access the dataset
    Book.books.push(this);
  }
  changeReadStatus() {
    if (this.haveRead === "yes") {
      this.haveRead = "no";
      return "no";
    } else {
      this.haveRead = "yes";
      return "yes";
    }
  }
  removeBook() {
    Book.getBooks().splice(Book.books.indexOf(this), 1);
  }
}

// function addDataAtributte(book) {}

// function updateBooksIndexes() {
//   Book.books.forEach((e) => {
//     e.htmlReference.dataset.index = Book.books.indexOf(e);
//   });
// }


// Add book functionality
const addBookDialog = (() => {
  // Add the listeners on load
  const dialog = document.querySelector(".add-book-dialog");
  document.querySelector("#add-book").addEventListener("click", () => {
    //code, watch the tutorial about dialogs and modals, to show it when clicked
    dialog.show();
  });
  //Add book close button
  document .querySelector("#close-dialog-button") .addEventListener("click", () => {
      dialog.close();
    });

  // Show the functionality to close the dialogs
  const close = () => dialog.close();
  const show = () => dialog.show();

  return { close, show };
})();

const addBookDialogForm = document.querySelector("body > dialog > div > form");
addBookDialogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = addBookDialogForm.title.value;
  let author = addBookDialogForm.author.value;
  let pages = addBookDialogForm.pages.value;
  let read = addBookDialogForm.read.value;
  // Add the book to the array and the card
  const bookObject = new Book(title, author, pages, read);
  addBookCardToDOM(bookObject);
  //Reset all the values
  addBookDialogForm.reset();

  addBookDialog.close();
});
