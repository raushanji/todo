import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  emailPattern = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
  regexWordsWithSpace = new RegExp('^[a-zA-Z][a-zA-Z ]*$');

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private httpService : HttpService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern(this.regexWordsWithSpace)]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required]],
      }
    )
  }

  getDynamicErrors(controlName) {

    let control = this.registrationForm.get(controlName)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

  register() {
    // console.log(this.registrationForm.value);
    // this.snackbar.open('Registration Successful', 'close', { duration: 2000 })
    // this.router.navigate(['login']);

    this.httpService.registerUser(this.registrationForm.value).subscribe(
      (res : any) => {
        // console.log(res)

        if(res.success){
          this.snackbar.open(res.msg, 'close', {duration : 2000})
          this.router.navigate([''])
        }

      },
      err => {
        console.log(err)
      }
    )
  }


}
