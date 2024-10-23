// All of the books will be stored here.
const myLibrary = [
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    haveRead: "yes",
  },

  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 277,
    haveRead: "no",
  },
];

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

const booksContainer = document.querySelector(".books-container");
function addBookCard(book) {
  // Make all the nodes that will be appended and add their classes
  const bookTitle = document.createElement("p");
  bookTitle.className = "book-title";
  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  const bookPages = document.createElement("p");
  bookPages.className = "book-pages";
  const bookRead = document.createElement("p");
  bookRead.className = "book-read";

  // Create the card the book will be in.
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookRead.textContent = book.haveRead;

  // Append everything.
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  booksContainer.appendChild(bookCard);
  return;
}
function addBookToLibrary(bookObject) {
  // If it is an array, add all the objects from the array
  if (!Array.isArray(bookObject)) {
    for (const book of myLibrary) {
      addBookCard(book);
    }
    return;
  }

  //if only one book
  addBookCard(bookObject);
  return;
}
addBookToLibrary();

// Add book functionality
const addBookDialog = document.querySelector(".add-book-dialog");
//close by default
const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", () => {
  //code, watch the tutorial about dialogs and modals, to show it when clicked
  addBookDialog.show();
});
//Add book close button
const closeBookButton = document.querySelector("#close-dialog-button");
closeBookButton.addEventListener("click", () => {
  addBookDialog.close();
});

const addBookDialogForm = document.querySelector("body > dialog > div > form");
addBookDialogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = addBookDialogForm.title.value;
  let author = addBookDialogForm.author.value;
  let pages = addBookDialogForm.pages.value;
  let read = addBookDialogForm.read.value;
  // Add the book to the array and the card
  const bookObject = new Book(title, author, pages, read);
  myLibrary.push(bookObject);
  addBookCard(bookObject);
  //Reset all the values
  addBookDialogForm.reset();
  
  addBookDialog.close();
});
