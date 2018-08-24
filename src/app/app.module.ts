import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  const appRoutes: Routes = [
    {
      path: 'books',
      component: BookComponent,
      data: { title: 'Book List' }
    },
    {
      path: 'book-details/:id',
      component: BookDetailComponent,
      data: { title: 'Book Details' }
    },
    {
      path: 'book-create',
      component: BookCreateComponent,
      data: { title: 'Create Book' }
    },
    {
      path: 'book-edit/:id',
      component: BookEditComponent,
      data: { title: 'Edit Book' }
    },
    { path: '',
      redirectTo: '/books',
      pathMatch: 'full'
    }
  ]
})
export class AppModule { }
