import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgEventBus } from 'ng-event-bus';
import { EventBusService } from './providers/event-bus.service';
import { directives } from './directives/directives';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ...directives

    ],
    providers: [
      NgEventBus,
      EventBusService
    ],
    declarations: [
      ...directives
    ]
})
export class CoreModule {}
