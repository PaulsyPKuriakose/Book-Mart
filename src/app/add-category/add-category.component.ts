import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookCategoryModel } from '../shared/bookCategoryModel';
import { BookModel } from '../shared/model/bookModel';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  categorydata: BookCategoryModel;

  disableCategoryName: boolean = false;
  isAtleastOneItemAdded: boolean = false;
  isEdit: boolean = false;
  @ViewChild('f', { static: false }) addBookForm: NgForm;
  constructor(
    @Optional() private dialogRef: MatDialogRef<AddCategoryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data != null && data.value != null) {
      this.categorydata = data.value;
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
    if (!this.isEdit) {
      this.categorydata = new BookCategoryModel();
      this.categorydata.Books = [];
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  addToList() {
    this.disableCategoryName = true;
    let b = new BookModel();
    b.Author = this.addBookForm.value.book.bookName;
    b.Name = this.addBookForm.value.book.author;
    b.Year = this.addBookForm.value.book.year;
    b.Id = this.categorydata.Books.length + 1;
    this.categorydata.Books.push(b);
    this.addBookForm.reset();
    this.isAtleastOneItemAdded = true;
  }
  save() {
    if (this.isAtleastOneItemAdded) {
      if (!this.isEdit) {
        this.dialogRef.close(this.categorydata);
      } else {
        this.onClose();
      }
    } else {
      window.alert('No Items Added To List!!');
    }
  }
  onReset() {
    this.addBookForm.reset();
    if (!this.isEdit) {
      this.disableCategoryName = false;
      this.isAtleastOneItemAdded = false;
      this.categorydata = new BookCategoryModel();
      this.categorydata.Books = [];
    }
  }
}
