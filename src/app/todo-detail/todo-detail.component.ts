import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoDetailArray = [];
  email;
  
  constructor(
    private httpService : HttpService,
    private snackbar : MatSnackBar,
    private router : Router,
    private route : ActivatedRoute,
    private loginService : LoginService
  ) { }

  ngOnInit() {
   this.email = this.route.snapshot.queryParams;
   console.log(this.email);
   this.callTodoDetailApi();
  }

  callTodoDetailApi(){
    let body = { email : this.email };

    this.httpService.getTodoDetail(body).subscribe(
      (res : any) => {
        console.log(res);
        this.todoDetailArray = res.data
      },
      err => {
        console.log(err)
      }
    )
  }

  signOut(){
    this.loginService.logOut();
  }
  
  back(){
    this.router.navigate(['list']);
  }

}
