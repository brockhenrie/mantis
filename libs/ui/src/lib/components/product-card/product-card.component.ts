/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { CarouselProduct } from '../../models/carousel-product.model';

@Component({
    selector: 'ui-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {
  @Input() product!:CarouselProduct;

    constructor() {}

    ngOnInit(): void {}

}
 