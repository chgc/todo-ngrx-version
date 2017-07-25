import * as ActionType from './todo-actions';
import {Todo} from './todo-actions';

export type Action = ActionType.AllActions;

export function TodoReducer(state: Todo[] = [], action: Action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...state, action.payload];
    case ActionType.DONE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    case ActionType.CLEAR_TODO:
      return state.filter(todo => todo.isCompleted === false);
    case ActionType.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case ActionType.COMPLETE_TODO:
      return state.map(todo => {
        todo.isCompleted = true;
        return todo;
      });
    default:
      return state;
  }
}
