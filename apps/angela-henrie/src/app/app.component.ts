import { fader } from './app-routing/router-animations/fader';
/* eslint-disable @typescript-eslint/no-empty-function */

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { UiSidenav } from '@mantis/ui';
import { slide } from './app-routing/router-animations/slide';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
      //fader
      slide
    ]
})
export class AppComponent implements AfterViewInit {
    SNI: UiSidenav = {
        sidenavSide: 'end',
        toolbarConfig: {
            isHandset: false,
            color: 'primary',
            navConfig: [
                {
                    label: 'Home',
                    icon: 'home',
                    link: 'home'
                },
                {
                    label: 'Products',
                    icon: 'add',
                    link: 'products'
                },
                {
                    label: 'Settings',
                    icon: 'settings',
                    link: 'settings'
                }
            ]
        }
    };

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    isHandset!: boolean;
    constructor(
      private bo: BreakpointObserver
      ) {}

    ngAfterViewInit(): void {
        this.bo.observe([Breakpoints.Handset]).subscribe((res) => {
            if (res.matches) {
                this.SNI.toolbarConfig.isHandset = true;
                this.sidenav.mode = 'over';
                this.sidenav.close();
                this.sidenav.position = this.SNI.sidenavSide;
            } else {
                this.SNI.toolbarConfig.isHandset = false;
                this.sidenav.close();
            }
        });
    }

    prepareRoute(outlet: RouterOutlet){
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }


    toggleNav() {
        this.sidenav.toggle();
    }
    closeNav() {
        this.sidenav.close();
    }
}
