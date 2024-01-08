import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {Author} from "../../../model/author";
import {AuthorService} from "../../../service/author.service";
import {BookService} from "../../../service/book.service";
import {GenreEnum} from "../../../enumeration/genre-enum";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  authors: Author[] = [];
  books: Book[] = [];
  readonly GenreEnum = GenreEnum;

  constructor(private authorService: AuthorService, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.getAuthors();
    this.getBooks();
  }

  private getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      })
  }

  private getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => {
        this.authors = authors;
      })
  }


  deleteBook(bookId: string): void {
    this.bookService.deleteBook(bookId)
      .subscribe(() => {
        this.init();
      });
  }
}
