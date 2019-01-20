import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private httpService: HttpService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
    });
  }

  getDynamicErrors(controlName) {
    let control = this.loginForm.get(controlName)
    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }
  }

  login() {
    // console.log(this.loginForm.value);
    // this.snackbar.open('Login Successful', 'close', { duration: 2000 })
    // this.router.navigate(['list']);

    this.httpService.login(this.loginForm.value).subscribe(
      (res : any) => {
        // console.log(res);

        if(res.success){
          this.snackbar.open(res.msg, 'close', {duration : 2000})
          this.loginService.setTokenLocal(res.token);
          this.router.navigate(['list'])
        }
      },
      err => {
        console.log(err);
      }
    )
    // this.router.navigate(['list']);
  }

}
