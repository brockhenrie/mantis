/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiToolbar } from '../../models/uiToolbar.model';

@Component({
    selector: 'ui-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() tb!:UiToolbar

  @Output() toggleDrawer = new EventEmitter();
  @Output() closeDrawer = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}


    onToggleDrawer(){
      this.toggleDrawer.emit();
    }

    onCloseDrawer(){
      this.closeDrawer.emit();
    }
}
