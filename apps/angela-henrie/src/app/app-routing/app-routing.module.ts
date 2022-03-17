import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeProductsResolver }  from '@mantis/core';
import { routes } from './app.routes';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([...routes])
    ],
    exports: [RouterModule],
    providers: [
      HomeProductsResolver
    ]
})
export class AppRoutingModule {}
