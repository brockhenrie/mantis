/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '../../../models/routerLink.model';

@Component({
  selector: 'ui-sidenav-list',
  templateUrl: './sidenav-list.component.html',
})
export class SidenavListComponent implements OnInit {

  @Input()
  links!:RouterLink[];

  @Output()
  navigated = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNav(path:string){
    this.navigated.emit();
    this.router.navigate([path]);
  }
}
