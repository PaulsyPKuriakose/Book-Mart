import { BookModel } from './model/bookModel';

export class BookCategoryModel {
  public Id: number;
  public CategoryName: string;
  public Books: BookModel[];
}
