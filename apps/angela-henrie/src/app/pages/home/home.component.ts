import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { ProductsResolved } from '@mantis/products';
=======
import {  ProductsResolved } from '@mantis/core';
>>>>>>> 3b86392eb7bb3996d087f46cc32935dec9990349
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    animations: [],
    providers: []
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  state='start';
  images = images;
  showSpinner=true;
  backgroundAnimatedImage= '../../../assets/Large_Light_Pink_Rose.png';
    products$!: Observable<ProductsResolved>;
    constructor(private route:ActivatedRoute) {}
=======
    state: 'spin' | 'stop' = 'spin';
    images = images;
    showSpinner = true;
    backgroundAnimatedImage = '../../../assets/Large_Light_Pink_Rose.png';
    products$!: Observable<ProductsResolved>;
    constructor(private route: ActivatedRoute) {}
>>>>>>> 3b86392eb7bb3996d087f46cc32935dec9990349

    ngOnInit(): void {
        this.products$ = this.route.data.pipe(
            map((resolvedData) => {
                const { products } = resolvedData;
                return products;
            })
        );
    }

    onAnimate() {
        this.showSpinner = !this.showSpinner;
    }
}

const images = [
    {
        imageSrc:
            'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'nature1'
    },
    {
        imageSrc:
            'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'nature2'
    },
    {
        imageSrc:
            'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        imageAlt: 'person1'
    },
    {
        imageSrc:
            'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'person2'
    }
];
