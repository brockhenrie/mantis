import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsResolver } from './resolvers/home-products.resolver';
import { appRoutes } from './app.routes';

const routes: Routes = appRoutes;

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
      HomeProductsResolver
    ]
})
export class AppRoutingModule {}
