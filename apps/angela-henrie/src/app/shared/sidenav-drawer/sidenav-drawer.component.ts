/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { RouterLink } from '@mantis/ui';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
})
export class SidenavDrawerComponent implements OnInit {
  @Output()
  navigated= new EventEmitter();

  links:RouterLink[] = [
    {path:'', label:'Home'},
    {path:'products', label:'Products'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onNav(){
    this.navigated.emit();
  }

}
