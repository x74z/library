// All of the books will be stored here.
const myLibrary = [
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    haveRead: true,
  },

  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 277,
    haveRead: false,
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
    const bookTitle = document.createElement("p");
    bookTitle.className = "book-title";
    const bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author";
    const bookPages = document.createElement("p");
    bookPages.className = "book-pages";
    const bookRead = document.createElement("p");
    bookRead.className = "book-read";

    //Itirate trough every property to add it to a card
    //inside the library .book-container

    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookRead.textContent = book.haveRead;

    //keep at the end after changing the content
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    booksContainer.appendChild(bookCard);
  }
}
