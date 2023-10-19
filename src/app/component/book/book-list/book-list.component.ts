import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book";
import {GenreEnum} from "../../../enumeration/genre-enum";
import {Author} from "../../../model/author";
import {AuthorService} from "../../../service/author.service";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  protected readonly GenreEnum = GenreEnum;

  authors: Author[] = [];

  books: Book[] = [];

  constructor(private authorService: AuthorService, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.getAuthors();
    this.getBooks();
  }

  closeBookModal(): void {
    /*const bookModal  = new bootstrap.Modal('#bookModal', {
      keyboard: false
    });
    bookModal.hide();*/
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

}
