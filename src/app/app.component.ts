import 'rxjs/add/operator/filter';

import {} from '@angular/common';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {
  ADD_TODO,
  AddTodo,
  ClearTodo,
  CompleteTodo,
  MarkAllTodoComplete,
  RemoveTodo,
  Todo
} from './ngrx/todo-actions';

@Component(
    {selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'app';
  status = '';
  @ViewChild('newTodo') newTodo: ElementRef;
  todos: Observable<Todo[]>;
  constructor(private store: Store<any>, private dispatcher: ActionsSubject) {
    this.todos = this.store.select('todos');
    // 測試用: 過濾特定的 action，類似 effects 的行為
    this.dispatcher.filter((action: any) => action.type === ADD_TODO).subscribe(x => {
      if (this.newTodo) {
        this.newTodo.nativeElement.value = '';
        this.newTodo.nativeElement.focus();
      }
    });
  }

  add(input) {
    if (input.value) {
      this.store.dispatch(new AddTodo(input.value));
    }
  }

  mark(todo: Todo) {
    this.store.dispatch(new CompleteTodo(todo.id));
  }

  remove(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo.id));
  }
  clear() {
    this.store.dispatch(new ClearTodo());
  }
  markAll() {
    this.store.dispatch(new MarkAllTodoComplete());
  }

  setStatus(status) {
    this.status = status;
  }
}
