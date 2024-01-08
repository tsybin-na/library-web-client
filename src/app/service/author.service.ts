import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../model/author";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorsApiUrl: string = environment.backendUrlApi + "/" + "authors";

  constructor(private http: HttpClient) {
  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsApiUrl);
  }
}
