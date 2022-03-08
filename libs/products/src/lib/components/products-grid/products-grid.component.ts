/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Product } from '../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
})
export class ProductsGridComponent implements OnInit {
  @Input()
  products:Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
