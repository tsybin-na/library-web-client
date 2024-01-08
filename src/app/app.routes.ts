import {Routes} from '@angular/router';
import {AboutComponent} from "./component/base/about/about.component";
import {PageNotFoundComponent} from "./component/base/page-not-found/page-not-found.component";
import {BooksComponent} from "./component/book/books/books.component";
import {AddBookComponent} from "./component/book/add-book/add-book.component";
import {EditBookComponent} from "./component/book/edit-book/edit-book.component";

export const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent, title: 'Библиотека'},
  {path: 'books/add', component: AddBookComponent, title: 'Новая книга'},
  {path: 'books/edit/:id', component: EditBookComponent, title: 'Редактирование'},
  {path: 'about', component: AboutComponent, title: 'О проекте'},
  {path: '**', component: PageNotFoundComponent, title: 'Страница не найдена'}
];
