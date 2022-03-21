import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HomeProductsResolver } from './resolvers/home-products.resolver';

export const appRoutes: Routes = [
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
  { path: '**', redirectTo: 'home' }
];
