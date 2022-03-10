import { CarouselItem } from './carousel-item.model';

export class CarouselComponent {
    items: CarouselItem[] = [];
    indicators = true;
    controls = true;
    autoSlide = false;
    slideInterval = 3000; //default to 3 seconds
    selectedIndex = 0;

    //changes slide on set slide interval
    autoSlideItems() {
        setInterval(() => {
            this.onNextClick();
        }, this.slideInterval);
    }
    
    //sets the image of the dot/indicator
    selectItem(i: number) {
        this.selectedIndex = i;
    }

    onPrevClick() {
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.items.length - 1;
            return;
        }
        this.selectedIndex--;
    }

    onNextClick() {
        if (this.selectedIndex === this.items.length - 1) {
            this.selectedIndex = 0;
            return;
        }
        this.selectedIndex++;
    }
}
