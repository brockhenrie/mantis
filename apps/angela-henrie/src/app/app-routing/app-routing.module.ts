import { ProductsModule } from '@mantis/products';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', loadChildren: ()=> import('@mantis/products').then(m=>m.ProductsModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
