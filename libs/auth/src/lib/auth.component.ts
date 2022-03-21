/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mantis/core';



@Component({
  selector: 'auth-shell',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthShellComponent implements OnInit {

  activeUser$ = this.auth.user$;

  constructor(private auth: AuthService){}

  ngOnInit(): void {





  }


}
