import { BookModel } from './model/bookModel';

export class BookCategoryModel {
  Id: number;
  CategoryName: string;
  Books: BookModel[];
}
