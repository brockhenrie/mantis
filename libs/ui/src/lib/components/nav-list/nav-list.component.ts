/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { UiToolbarNav } from '../../models/toolbar-nav.model';

@Component({
    selector: 'ui-nav-list',
    templateUrl: './nav-list.component.html'
})
export class NavListComponent implements OnInit {
  @Input() navInit!:UiToolbarNav;
    constructor() {}

    ngOnInit(): void {}


}
