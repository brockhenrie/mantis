/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';

@Component({
    selector: 'ui-nav-list',
    templateUrl: './nav-list.component.html'
})
export class NavListComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter();
  @Input() navConfig!: NavItem[];
    constructor() {}

    ngOnInit(): void {}

    closeSidenav(){
      this.closeDrawer.emit()
    }


}
