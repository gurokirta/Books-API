import { SAVE_BOOKS } from "./actions";

export type SAVE_BOOKS_ACTION = {
  type: typeof SAVE_BOOKS;
  books: BookItem[];
};

export type ACTIONS = SAVE_BOOKS_ACTION;
