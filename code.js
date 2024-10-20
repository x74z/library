const myLibrary = [];
function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

function addBookToLibrary(book) {
  for (const key in book) {
    //Itirate trough every property to add it to a card
    //inside the library .book-container
  }
}


