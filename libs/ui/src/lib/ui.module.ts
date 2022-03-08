import { UiSearchbarComponent } from './components/ui-searchbar/ui-searchbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

import {MatListModule} from '@angular/material/list';






@NgModule({
    imports: [
      CommonModule,
      MatListModule

    ],
    declarations: [
      ShellComponent,
      SidenavListComponent,
      UiSearchbarComponent


    ],
    exports: [
      ShellComponent,
      SidenavListComponent,
      UiSearchbarComponent


    ]
})
export class UiModule {}
