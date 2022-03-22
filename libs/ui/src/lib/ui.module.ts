import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatModules } from './material';
import {  UiComponents } from './components/components';
import { CoreModule } from '@mantis/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeartComponent } from './svg/heart/heart.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        ...MatModules,
        CoreModule
    ],

    declarations: [
      ...UiComponents,
      HeartComponent,

    ], 

    exports: [
      RouterModule,
      ...UiComponents,
      ...MatModules,
      FlexLayoutModule,
      HeartComponent,

     ]
})
export class UiModule {}
