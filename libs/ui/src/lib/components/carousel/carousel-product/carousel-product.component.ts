/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { CarouselProduct } from '../../../models/carousel-product.model';

@Component({
  selector: 'ui-carousel-product',
  templateUrl: './carousel-product.component.html',
})
export class CarouselProductComponent implements  OnInit {

  @Input() items!:CarouselProduct[];
  @Input()  autoSlide = false;
  @Input()  slideInterval = 3000; //default to 3 seconds
   selectedIndex = 0;


  constructor() {
  }

  ngOnInit(): void {
    if (this.autoSlide ){
      this.autoSlideItems();
    }
  }

  //changes slide on set slide interval
   autoSlideItems(){
    setInterval(() =>{
      this.onNextClick();
    }, this.slideInterval);
  }
  //sets the image of the dot/indicator
   selectItem(i:number){
    this.selectedIndex = i;
  }

   onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.items.length-1;
      return
    }
    this.selectedIndex--;
  }

   onNextClick(){
    if(this.selectedIndex === this.items.length-1){
      this.selectedIndex = 0;
      return
    }
    this.selectedIndex++;
  }
}
