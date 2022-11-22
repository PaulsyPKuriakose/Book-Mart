import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app.router.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MatInputModule } from '@angular/material/input';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: BooksComponent,
  },
];
@NgModule({
  declarations: [AppComponent, BooksComponent, AddCategoryComponent],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
