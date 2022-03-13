/* eslint-disable @typescript-eslint/no-explicit-any */
import { catchError, shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Product, ProductDataService, ProductsResolved } from '@mantis/products';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class HomeProductsResolver implements Resolve<ProductsResolved> {
  constructor(private ps: ProductDataService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductsResolved> {
console.log(state.root)
    return this.ps.getProducts().pipe(
      map((products: Product[]) =>{
        console.log(products);
        return {
          products:products
        }
      }),
      shareReplay(1),
      catchError((error: any) =>{
        return of({products:[], error:error})
      })

    );
  }
}
