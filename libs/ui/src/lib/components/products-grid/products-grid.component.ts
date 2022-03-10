/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';

import { CarouselProduct } from '../../models/carousel-product.model';

@Component({
    selector: 'ui-products-grid',
    templateUrl: './products-grid.component.html'
})
export class ProductsGridComponent implements OnInit {
  @Input() products!:CarouselProduct[]
    constructor() {}

    ngOnInit(): void {}


}
