import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { LoginService } from './../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  userArray =  []

  constructor(
    private router: Router,
    private httpService: HttpService,
    private loginService: LoginService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.callApi()
  }

  callApi(){
    this.httpService.getAllUsers().subscribe(
      (res : any) => {
        console.log(res);
        this.userArray = res.data
      },
      err => {
        console.log(err)
      }
    )
  }
  
  goToCreateTodo(){
    this.router.navigate(['create']);
  }

  signOut(){
    this.loginService.logOut();
  }

  delete(val) {
    console.log(val);
    this.httpService.deleteTodo(val).subscribe(
      (res : any) => {
         console.log(res);
         
         if(res.success){
          this.snackbar.open(res.msg, 'close', {duration : 2000})
          this.ngOnInit();
          //this.router.navigate(['list']);
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
