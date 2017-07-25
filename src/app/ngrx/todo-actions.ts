import {Action} from '@ngrx/store';
import {UUID} from './../utils/uuid';
export const ADD_TODO = '[TODO] ADD_TODO';
export const DONE_TODO = '[TODO] DONE_TODO';
export const REMOVE_TODO = '[TODO] REMOVE_TODO';
export const COMPLETE_TODO = '[TODO] COMPLETE_TODO';
export const CLEAR_TODO = '[TODO] CLEAR_TODO';

export interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  payload: Todo = {content: '', isCompleted: false, id: ''};
  constructor(public content: string) {
    this.payload = {...this.payload, content: content, id: UUID.UUID()};
  }
}

export class CompleteTodo implements Action {
  readonly type = DONE_TODO;
  constructor(public id: string) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public id: string) {}
}

export class MarkAllTodoComplete implements Action { readonly type = COMPLETE_TODO; }

export class ClearTodo implements Action { readonly type = CLEAR_TODO; }

export type AllActions = AddTodo | CompleteTodo | ClearTodo | RemoveTodo | MarkAllTodoComplete;
