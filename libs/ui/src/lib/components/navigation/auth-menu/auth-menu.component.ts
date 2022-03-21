/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventBusService } from '@mantis/core';
import { tap } from 'rxjs';
import { NavItem } from '../../../models/nav-item.model';

@Component({
    selector: 'ui-auth-menu',
    templateUrl: './auth-menu.component.html',
    styleUrls: ['./auth-menu.component.scss']
})
export class AuthMenuComponent implements OnInit {
  @Output() closeNav = new EventEmitter();
    authLinks: NavItem[] = [
      { link: 'auth/signup', label: 'Signup', icon: 'enter' },
        { link: 'auth/login', label: 'Login', icon: 'login' },
        { link: 'auth/logout', label: 'Logout', icon: 'logout' },
    ];

    isLoggedIn$ = this.eventBus.onListen('Auth - isLoggedIn').pipe(
      tap((value) => {
        this.authLinks.filter((item) => {
          if (item.label === 'Login'){
            return  value ? true : false;
          }
          else return true;
        })
      })
    );

    constructor(private eventBus:EventBusService) {}

    ngOnInit(): void {}
    closeSidenav(){
      this.closeNav.emit();
    }
}
