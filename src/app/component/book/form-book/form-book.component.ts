import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../../model/author";
import {AuthorService} from "../../../service/author.service";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book";
import {FormsModule} from "@angular/forms";
import {GenreEnum} from "../../../enumeration/genre-enum";
import {DirectoryConstant} from "../../../constant/directory-constant";
import {Location} from '@angular/common';
import {catchError, EMPTY, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.css'
})
export class FormBookComponent implements OnInit {
  authors: Author[] = [];
  genres: GenreEnum[] = DirectoryConstant.GENRE_VALUES;
  readonly GenreEnum = GenreEnum;
  @Input() book!: Book;
  hasError: boolean = false;
  errorsMap = new Map<string, string>();

  constructor(private authorService: AuthorService, private bookService: BookService, private location: Location) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.getAuthors();
  }

  saveBook(): void {
    this.hasError = false;

    let savedObservable: Observable<any> = !this.book.id ?
      this.bookService.addBook(this.book) :
      this.bookService.updateBook(this.book);

    savedObservable.pipe(catchError(e => {
      return this.handleError(e);
    })).subscribe(() => {
      this.location.back();
    });
  }

  authorWasSelected(authorId: string): boolean {
    return this.book.authorsIds.includes(authorId);
  }

  clickOnCheckboxGenre(authorId: string): void {
    let authorsIds: string[] = this.book.authorsIds;

    authorsIds.includes(authorId) ?
      authorsIds.splice(authorsIds.indexOf(authorId), 1) :
      authorsIds.push(authorId);
  }

  getValidationError(fieldName: string): string | undefined {
    return this.errorsMap.get(fieldName);
  }

  getValidationClass(fieldName: string): string {
    if (!this.hasError) {
      return ""
    }

    return (this.errorsMap.get(fieldName)) ? "is-invalid" : "is-valid";
  }

  private getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => {
        this.authors = authors;
      })
  }

  private handleError(error: HttpErrorResponse) {
    this.hasError = true;
    this.errorsMap = new Map(Object.entries(error.error.invalidFields));
    return EMPTY;
  }

}
