import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { Error404Component } from './error404/error404.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LoginGuard } from './Guards/login.guard';
import { DashboardGuard } from './Guards/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'list',
    component: TodoListComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'create',
    component: CreateTodoComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'edit/:userEmail',
    component: EditTodoComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'detail',
    component: TodoDetailComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
