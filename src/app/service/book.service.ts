import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksApiUrl: string = environment.backendUrlApi + "/" + "books";

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksApiUrl);
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(this.booksApiUrl + "/" + bookId);
  }

  getEmptyBook(): Book {
    return {
      id: '',
      createdAt: null as any,
      name: '',
      description: '',
      genre: null as any,
      bestseller: false,
      minimumOnDisplay: 0,
      authorsIds: []
    };
  }

  addBook(book: Book): Observable<String> {
    return this.http.post<any>(this.booksApiUrl, book);
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(this.booksApiUrl + "/" + book.id, book);
  }

  deleteBook(bookId: string): Observable<void> {
    return this.http.delete<void>(this.booksApiUrl + "/" + bookId);
  }

}
