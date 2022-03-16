import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { resolvers }  from '@mantis/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
           products: resolvers.HomeProductsResolver
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
      resolvers.HomeProductsResolver
    ]
})
export class AppRoutingModule {}
