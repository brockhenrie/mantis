import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatModules } from './material';
import {  UiComponents } from './components/components';
import { CoreModule } from '@mantis/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LockInputComponent } from './components/forms/lock-input/lock-input.component';
import { ValueAccessorExampleComponent } from './components/forms/value-accessor-example/value-accessor-example.component';
import { CustomFormFieldControlComponent } from './components/forms/custom-form-field-control/custom-form-field-control.component';
import { CustomFormFieldContainerComponent } from './components/forms/custom-form-field-container/custom-form-field-container.component';
import { SearchFomFieldContainerComponent } from './components/forms/search-fom-field-container/search-fom-field-container.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        ...MatModules,
        CoreModule
    ],

    declarations: [
      ...UiComponents
    ],

    exports: [
      RouterModule,
      ...UiComponents,
      ...MatModules,
      FlexLayoutModule,
     ]
})
export class UiModule {}
