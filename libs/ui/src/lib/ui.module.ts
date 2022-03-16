import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatModules } from './material';
import { UiComponentBarrel } from './components/components';
import { CoreModule } from '@mantis/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        ...MatModules,
        CoreModule
    ],

    declarations: [
      ...UiComponentBarrel
    ],

    exports: [
      RouterModule,
      ...UiComponentBarrel,
      ...MatModules,
      FlexLayoutModule]
})
export class UiModule {}
