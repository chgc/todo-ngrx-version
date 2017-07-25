import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {TodoReducer} from './ngrx/todo-reducer';
import { FilterStatusPipe } from './filter-status.pipe';

@NgModule({
  declarations: [AppComponent, FilterStatusPipe],
  imports: [BrowserModule, StoreModule.forRoot({todos: TodoReducer})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
