/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { angelaHenrieEnvironment } from '@mantis/env';
import { Observable, shareReplay, catchError, of } from 'rxjs';
import { Category } from '../models/products/category.model';
import { Product } from '../models/products/product.model';

@Injectable()
export class ProductDataService {
    private allProducts$ = this.firestore
        .collection<Product>('Products')
        .valueChanges()
        .pipe(
            shareReplay(1),
            catchError((err) => {
                return productError(err);
            })
        );

    constructor(
        private firestore: AngularFirestore,
        private storage: AngularFireStorage
    ) {}

    getProducts(): Observable<Product[]> {
        return this.allProducts$;
    }

    getCategories() {
        return this.firestore
            .collection<Category>('/categories')
            .valueChanges();
    }
}

function productError(err: Error) {
    let stack;
    if (angelaHenrieEnvironment.debug.stack) {
        stack = err.stack;
    }
    const ErrorProduct: Product = {
        name: err.name,
        description: err.message,
        richDescription: stack as string,
        price: 0,
        category: 'err',
        dateCreated: new Date(),
        countInStock: 0
    };
    console.log(err);
    return of([ErrorProduct]);
}
