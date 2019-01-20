import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  editTodoForm: FormGroup;
  email;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private snackbar: MatSnackBar,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.createForm();

    this.email = this.route.snapshot.params.userEmail;
    console.log(this.email)

    this.editTodoForm.patchValue(this.route.snapshot.queryParams);
  }

  createForm(){
    this.editTodoForm = this.fb.group({
      age : ['', Validators.required],
      pincode : ['', Validators.required]
    })
  }

  getDynamicErrors(controlName) {

    let control = this.editTodoForm.get(controlName)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

  updateTodoDetail(){
    //console.log(this.editTodoForm.value);

    let body = { email : this.email, ...this.editTodoForm.value }

    this.httpService.updateUser(body).subscribe(
      (res :any) => {
        // console.log((res))
        this.snackbar.open(res.msg, 'close', {duration : 2000});
        this.router.navigate(['list'])
      },
      err => {
        console.log(err)
      }
    )
  }
  
  signOut(){
    this.loginService.logOut();
  }
}
