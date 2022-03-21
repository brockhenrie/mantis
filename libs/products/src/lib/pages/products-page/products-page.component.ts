import { combineLatest, map, Observable } from 'rxjs';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductDataService } from '@mantis/core';

@Component({
    selector: 'products-page',
    templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
    private filterId = new BehaviorSubject<string>('all');
    catFilter$ = this.filterId.asObservable();
    categories$ = this.pd.getCategories();

    filteredProducts$:Observable<Product[]> = combineLatest(
      this.pd.getProducts(),
      this.catFilter$
    )
    .pipe(
      map(([products, filter])=>{
        return products.filter((product: Product)=>{
          if(filter === 'all' ){
             return true
            }else{
            return product.category ? product.category === filter : false
          }

        })
      })
    )



    constructor(private pd: ProductDataService) {}

    ngOnInit(): void {}

    onFilterEvent(id: string) {
      this.filterId.next(id);
    }
}
