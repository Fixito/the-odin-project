class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages, `;

    if (this.read) {
      info += 'read';
    } else {
      info += 'not read yet';
    }

    return info;
  }
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(book.info());
