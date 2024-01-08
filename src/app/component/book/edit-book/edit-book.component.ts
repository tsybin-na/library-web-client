import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../service/book.service";
import {FormBookComponent} from "../form-book/form-book.component";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../model/book";

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [
    FormBookComponent
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.book = bookService.getEmptyBook();
  }

  ngOnInit(): void {
    const bookId = String(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(bookId)
      .subscribe(book => {
        this.book = book;
      });
  }

}
