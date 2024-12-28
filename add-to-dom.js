import { Book } from "./code.js";

function addBookCardChildren(bookCard) {
  // Make all the nodes that will be appended and add their classes
  const bookTitle = document.createElement("p");
  bookTitle.className = "book-title";
  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  const bookPages = document.createElement("p");
  bookPages.className = "book-pages";
  const bookRead = document.createElement("p");
  bookRead.className = "book-read";
  const bookRemoveButton = document.createElement("button");
  bookRemoveButton.className = "book-x-button";
  const bookChangeReadStatus = document.createElement("button");
  bookChangeReadStatus.className = "book-status";
  // Append everything.
  bookCard.appendChild(bookRemoveButton);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookChangeReadStatus);
}
export function addBookCardToDOM(book) {
  // Create the card the book will be in.
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookRead.textContent = book.haveRead;

  addBookCardChildren(bookCard);

  //Add the final div to its container
  const booksContainer = document.querySelector(".books-container");
  booksContainer.appendChild(bookCard);
  //Add a reference to the html bookCard in the object
  book.htmlReference = bookCard;

  // add the listener for the remove button
  bookRemoveButton.addEventListener("click", () => {
    book.removeBook();
  });
  //Handle the status button
  bookChangeReadStatus.addEventListener("click", () => {
    // TODO : add classes for styling of status
    let newStatus = book.changeReadStatus();
    bookRead.textContent = newStatus;
  });

  return;
}

export function addSavedBooksToDOM() {
  Book.getBooks().forEach((book) => {
    addBookCardToDOM(book);
  });
}
addSavedBooksToDOM();
