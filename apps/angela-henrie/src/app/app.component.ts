/* eslint-disable @typescript-eslint/no-empty-function */

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(
    private breakpointObserver: BreakpointObserver,
    ) {}
    
}
