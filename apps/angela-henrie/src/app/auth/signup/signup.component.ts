/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    passwordMatch: ['',[Validators.required,]]
  });




  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.signup.value.password === this.signup.value.passwordMatch){
      const email = this.signup.value.email;
      const password = this.signup.value.password;
      this.auth.signupEmail(email,password);
      this.router.navigate(['Auth/accountInfo']);
    }

  }

}
