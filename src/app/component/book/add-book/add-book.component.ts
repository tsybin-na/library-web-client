import {Component} from '@angular/core';
import {FormBookComponent} from "../form-book/form-book.component";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book";

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    FormBookComponent
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  book: Book;

  constructor(private bookService: BookService) {
    this.book = bookService.getEmptyBook();
  }

}
