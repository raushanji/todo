import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { Error404Component } from './error404/error404.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckApiService } from './httpInterceptor/check-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoListComponent,
    CreateTodoComponent,
    EditTodoComponent,
    TodoDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,

    //Angular Material
    MatSnackBarModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : CheckApiService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
