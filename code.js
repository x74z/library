// All of the books will be stored here.
const myLibrary = [];

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead),
    (this.htmlReference = "");
}
Book.prototype.changeReadStatus = function() {
  if (this.haveRead === "yes") {
    this.haveRead = "no";
    return "no";
  } else {
    this.haveRead = "yes";
    return "yes";
  }
};

const booksContainer = document.querySelector(".books-container");
// function addDataAtributte(book) {}

function updateBooksIndexes() {
  myLibrary.forEach((e) => {
    e.htmlReference.dataset.index = myLibrary.indexOf(e);
  });
}

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
  const bookRemoveButton = document.createElement("button");
  bookRemoveButton.className = "book-x-button";
  const bookChangeReadStatus = document.createElement("button");
  bookChangeReadStatus.className = "book-status";

  // Create the card the book will be in.
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookRead.textContent = book.haveRead;

  // Add the corresponding data attribute, acording to index
  const bookIndex = myLibrary.indexOf(book);
  bookCard.setAttribute("data-index", bookIndex);

  // Append everything.
  bookCard.appendChild(bookRemoveButton);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookChangeReadStatus);
  //Add the final div
  booksContainer.appendChild(bookCard);
  //Add a reference to the html bookCard in the object
  book.htmlReference = bookCard;
  // add the listener for the remove button
  bookRemoveButton.addEventListener("click", () => {
    const currentBookIndex = bookCard.dataset.index;
    myLibrary.splice(currentBookIndex, 1);
    booksContainer.removeChild(bookCard);
    updateBooksIndexes();
  });
  //Handle the status button
  bookChangeReadStatus.addEventListener("click", () => {
    // TODO : add classes for styling of status
    let newStatus = book.changeReadStatus();
    bookRead.innerText = newStatus;
  });

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
