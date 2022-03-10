/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { UiToolbarNav } from '../../models/toolbar-nav.model';

@Component({
    selector: 'ui-toolbar-nav',
    templateUrl: './toolbar-nav.component.html'
})
export class ToolbarNavComponent implements OnInit {
  @Input() navInit!:UiToolbarNav;
    constructor() {}

    ngOnInit(): void {}


}
