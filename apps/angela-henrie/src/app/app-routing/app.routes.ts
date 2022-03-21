import { Routes } from '@angular/router';
import { HomeProductsResolver } from '@mantis/core';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: 'home',
      component: HomeComponent,
      resolve: {
         products: HomeProductsResolver
         }
  },
  {
      path: 'products',
      loadChildren: () =>
          import('@mantis/products').then((m) => m.ProductsModule)
  },
  {
    path: 'blog',
    loadChildren: () =>
        import('@mantis/blog').then((m) => m.BlogModule)
},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
