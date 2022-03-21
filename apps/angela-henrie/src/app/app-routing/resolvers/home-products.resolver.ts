/* eslint-disable @typescript-eslint/no-explicit-any */
import { catchError, take } from 'rxjs/operators';
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
    return this.ps.getProducts().pipe(
      map((products: Product[]) =>{
        return {
          products: products
        }
      }),
      take(1),
      catchError((error: any) =>{
        return of({products:[], error:error})
      })

    );
  }
}
