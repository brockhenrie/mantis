/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService, EventBusService } from "@mantis/core";
import { NavItem } from "../../../models/nav-item.model";

@Component({
  selector: "ui-auth-menu",
  templateUrl: "./auth-menu.component.html",
  styleUrls: ["./auth-menu.component.scss"],
})
export class AuthMenuComponent implements OnInit {
  @Output() closeNav = new EventEmitter();
  authLinks: NavItem[] = [
    { link: "auth/signup", label: "Signup", icon: "enter" },
    { link: "auth/login", label: "Login", icon: "login" },
    { link: "auth/logout", label: "Logout", icon: "logout" },
  ];

  loggedIn$ = this.as.checkLogin();
  loggedOut$ = this.as.checkLogout();

  constructor(private eventBus: EventBusService, private as: AuthService) {}

  ngOnInit(): void {}
  logout(){
    this.as.logout();
  }
  closeSidenav() {
    this.eventBus.createEvent('CloseSideNav',{});
    // this.closeNav.emit();
  }
}
