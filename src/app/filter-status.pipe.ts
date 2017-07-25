import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './ngrx/todo-actions';

@Pipe({name: 'filterStatus'})
export class FilterStatusPipe implements PipeTransform {
  transform(value: Todo[], args?: string): Todo[] {
    if (args) {
      const isCompleted = args === 'active' ? false : true;
      return value.filter(todo => todo.isCompleted === isCompleted);
    } else {
      return value;
    }
  }
}
