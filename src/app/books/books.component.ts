import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { BookCategoryModel } from '../shared/bookCategoryModel';

import { BookModel } from '../shared/model/bookModel';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  categories: BookCategoryModel[] = [];
  books: BookModel[] = [];
  constructor(@Optional() private dialog: MatDialog) {}
  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    this.addItemstoBookList(1, 'Dune', 'Framk Herbert', 1965);
    this.addItemstoBookList(2, "Ender's Game", 'Orson Scott Card', 1985);
    this.addItemstoBookList(3, '1984', 'George Orwell', 1949);
    this.addItemstoBookList(4, 'Fahrenheit 451', 'Ray Bradbury', 1953);
    this.addItemstoBookList(5, 'Brave New World', 'Aldous Huxley', 1932);
    this.initializeBookCategories();
  }
  AddNewRow(catogory: BookCategoryModel, i: number) {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '50%',
      data: { value: catogory },
    });
    dialogRef.afterClosed().subscribe((data: BookCategoryModel) => {
      if (data != null) {
        this.categories.push(data);
      }
    });
  }
  private initializeBookCategories() {
    let bookCat = new BookCategoryModel();
    bookCat.Id = 1;
    bookCat.CategoryName = 'Default Category';
    bookCat.Books = this.books;
    this.categories.push(bookCat);
  }

  private addItemstoBookList(
    id: number,
    name: string,
    author: string,
    year: number
  ) {
    let book = new BookModel();
    book.Id = id;
    book.Author = author;
    book.Name = name;
    book.Year = year;
    this.books.push(book);
  }

  RemoveItem(id: number, item: BookModel[], i: number) {
    item.forEach((b, index) => {
      if (b.Id === id) {
        item.splice(index, 1);
      }
    });
    if (item.length == 0) {
      this.categories.splice(i, 1);
    }
  }
  Movedown(id: number, item: BookModel[]) {
    if (id < item.length) {
      item[id - 1].Id = id + 1;

      item[id].Id = id;
      item.sort((a, b) => a.Id - b.Id);
    }
  }
  Moveup(id: number, item: BookModel[]) {
    if (id > 1) {
      let index = id - 2;

      item.forEach((b) => {
        if (b.Id == id) {
          b.Id = id - 1;
        }
      });
      item[index].Id = id;
    }
    item.sort((a, b) => a.Id - b.Id);
  }
  AddCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe((data: BookCategoryModel) => {
      if (data != null) {
        this.categories.push(data);
      }
    });
  }
}
