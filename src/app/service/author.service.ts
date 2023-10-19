import {Injectable} from '@angular/core';
import {ApiConstant} from "../constant/api-constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../model/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorsUrl: string = ApiConstant.BACKEND_API_URL + ApiConstant.URL_SEPARATOR + "authors";

  constructor(private http: HttpClient) {
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

}
