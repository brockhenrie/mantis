/* eslint-disable @typescript-eslint/no-empty-function */

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UiSidenav } from '@mantis/ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    SNI: UiSidenav = {
        sidenavSide: 'end',
        toolbar: {
            isHandset: false,
            color: 'primary',
            toolbarNav: {
                items: [
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
                        label: 'Account Info',
                        icon: 'person',
                        link: 'account'
                    },
                    {
                        label: 'Settings',
                        icon: 'settings',
                        link: 'settings'
                    }
                ]
            }
        }
    };

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    isHandset!: boolean;
    constructor(private bo: BreakpointObserver) {}

    ngAfterViewInit(): void {
        this.bo.observe([Breakpoints.Handset]).subscribe((res) => {
            if (res.matches) {
                this.SNI.toolbar.isHandset = true;
                this.sidenav.mode = 'over';
                this.sidenav.close();
                this.sidenav.position = this.SNI.sidenavSide;
            } else {
                this.SNI.toolbar.isHandset = false;
                this.sidenav.close();
            }
        });
    }

    toggleNav() {
        this.sidenav.toggle();
    }
    closeNav() {
        this.sidenav.toggle();
    }
}
