/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@mantis/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSidenav = new EventEmitter();

  value = '';
  isLoggedIn = false;
  user$= this.auth.user$;

  constructor(
    private auth:AuthService,
    ) { }

  ngOnInit(): void {
  }
  onToggleSidenav(){
    this.toggleSidenav.emit();
  }
  logout(){

  }

}
