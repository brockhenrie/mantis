import { ProductsGridComponent } from './components/products-grid/products-grid.component';

import { ProductCardComponent } from './components/product-card/product-card.component';

import { UiSearchbarComponent } from './components/ui-searchbar/ui-searchbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { ToolbarNavComponent } from './components/toolbar-nav/toolbar-nav.component';
import { RouterModule } from '@angular/router';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { StylesModule } from './modules/styles.module';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';
import { CarouselProductComponent } from './components/carousel-product/carousel-product.component';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { CartMenuComponent } from './components/cart-menu/cart-menu.component';

@NgModule({
    imports: [CommonModule, RouterModule, StylesModule],

    declarations: [
        ShellComponent,
        SidenavListComponent,
        UiSearchbarComponent,
        CarouselImageComponent,
        CarouselProductComponent,
        ToolbarComponent,
        NavListComponent,
        ToolbarNavComponent,
        FeaturedProductsComponent,
        ProductsGridComponent,
        ProductCardComponent,
        AuthMenuComponent,
        CartMenuComponent,
    ],
    exports: [
      RouterModule,
      ShellComponent,
      SidenavListComponent,
      UiSearchbarComponent,
      CarouselImageComponent,
      CarouselProductComponent,
      ToolbarComponent,
      NavListComponent,
      ToolbarNavComponent,
      FeaturedProductsComponent,
      ProductsGridComponent,
      ProductCardComponent,
      AuthMenuComponent,
      CartMenuComponent,

    ]
})
export class UiModule {}
