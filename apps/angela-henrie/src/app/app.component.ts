import { Observable, Subscription, tap } from "rxjs";
/* eslint-disable @typescript-eslint/no-empty-function */

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, ViewChild, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { UiSidenav } from "@mantis/ui";
import {
  EventBusService,
  prepareRoute,
  slide,
  transformer,
} from "@mantis/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [transformer(100, 80, 720)],
})
export class AppComponent implements OnInit {
  prepareRoute = prepareRoute;
  SNI: UiSidenav = {
    sidenavSide: "end",
    toolbarConfig: {
      isHandset: false,
      color: "primary",
      navConfig: [
        {
          label: "Home",
          icon: "home",
          link: "home",
        },
        {
          label: "Blog",
          icon: "newspaper",
          link: "blog",
        },
        {
          label: "Products",
          icon: "add",
          link: "products",
        },
        {
          label: "Settings",
          icon: "settings",
          link: "settings",
        },
      ],
    },
  };

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isHandset!: boolean;
  constructor(private bo: BreakpointObserver, private eb: EventBusService) {}

  closeSideNav$ = new Observable<void>();
  toggleSideNav$ = new Observable<void>();
  ngOnInit() {
    if (!this.sidenav) {
      this.bo.observe([Breakpoints.Handset]).subscribe((res) => {
        if (res.matches) {
          this.SNI.toolbarConfig.isHandset = true;
          this.sidenav.mode ? "over" : "over";
          this.sidenav.close();
          this.sidenav.position = this.SNI.sidenavSide;
        } else {
          this.SNI.toolbarConfig.isHandset = false;
          this.sidenav.close();
        }
      });
    }
    this.closeSideNav$ = (this.eb.onListen("CloseSideNav").subscribe(() => {
      this.sidenav.close();
    }) as unknown) as Observable<void>;
    this.toggleSideNav$ = (this.eb.onListen("ToggleSideNav").subscribe(() => {
      this.sidenav.toggle();
    }) as unknown) as Observable<void>;
  }

  // function prepareRoute(outlet: RouterOutlet) {
  //     return (
  //         outlet &&
  //         outlet.activatedRouteData &&
  //         outlet.activatedRouteData['animation']
  //     );
  // }

  toggleNav() {
    this.sidenav.toggle();
  }
  closeNav() {
    this.sidenav.close();
  }
}
