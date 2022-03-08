/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login =this.fb.group({
    email: ['', [Validators.required,Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  authMode = 'Login';

  constructor(
    private auth: AuthService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
  }

  signInEmail(){
    this.auth.signInEmail(this.login.value.email,this.login.value.password);


  }

  signInGoogle(){
    this.auth.signInGoogle();

      this.router.navigate(['/home']);


  }

  onSignup(){
    this.router.navigate(['/auth/signup']);
  }




  getErrorMessage() {
    if (this.login.controls['error'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.login.controls['error'].hasError('email') ? 'Not a valid email' : '';
  }


}
