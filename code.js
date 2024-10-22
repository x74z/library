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
function addBookToLibrary() {
  for (const book of myLibrary) {
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
  }
}
//test function
addBookToLibrary();

// Add book functionality
const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", ()=>{
  //code, watch the tutorial about dialogs and modals, to show it when clicked
  
})


