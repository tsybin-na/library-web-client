import {Injectable} from '@angular/core';
import {ApiConstant} from "../constant/api-constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl: string = ApiConstant.BACKEND_API_URL + ApiConstant.URL_SEPARATOR + "books"

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

}
