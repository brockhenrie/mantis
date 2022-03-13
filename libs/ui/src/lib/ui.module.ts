

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatModules } from './material';
import { UiComponents } from './components/components';

@NgModule({
    imports: [CommonModule, RouterModule, ...MatModules],

    declarations: [...UiComponents],
    exports: [RouterModule, ...UiComponents]
})
export class UiModule {}
