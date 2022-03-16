/* eslint-disable @typescript-eslint/no-explicit-any */
import { catchError, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Product, ProductsResolved } from '../models/products/product.model';
import { Observable, map, of } from 'rxjs';
import { ProductDataService } from '../providers/product-data.service';

@Injectable()
export class HomeProductsResolver implements Resolve<ProductsResolved> {
  constructor(private ps: ProductDataService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductsResolved> {
console.log(state.root)
    return this.ps.getProducts().pipe(
      map((data: Product[]) =>{
        return {
          products: data
        } as ProductsResolved;
      }),
      take(1),
      catchError((error: any) =>{
        return of({products:[], error:error})
      })

    );
  }
}
