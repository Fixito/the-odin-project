export class Book {
  constructor(title, author, pages, read) {
    this.id = Number(new Date().getTime().toString());
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
