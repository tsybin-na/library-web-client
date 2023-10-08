import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book";
import {GenreEnum} from "../../../enumeration/genre-enum";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      })

  }

  init(): void {
    this.getBooks();
  }

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.init();
  }


  protected readonly GenreEnum = GenreEnum;
}
