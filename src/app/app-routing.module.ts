import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./component/book/book-list/book-list.component";
import {AboutComponent} from "./component/base/about/about.component";
import {PageNotFoundComponent} from "./component/base/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'book-list', pathMatch: 'full'},
  {path: 'book-list', component: BookListComponent, title: 'Библиотека'},
  {path: 'about', component: AboutComponent, title: 'О проекте'},
  {path: '**', component: PageNotFoundComponent, title: 'Страница не найдена'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
