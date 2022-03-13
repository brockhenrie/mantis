import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HomeProductsResolver } from '../resolvers/home-products.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'right' },
        resolve: {
           products: HomeProductsResolver
           }
    },
    {
        path: 'products',
        loadChildren: () =>
            import('@mantis/products').then((m) => m.ProductsModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

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
