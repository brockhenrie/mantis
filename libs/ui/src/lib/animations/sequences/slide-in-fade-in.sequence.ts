import { transition, style, animate, keyframes } from '@angular/animations';

export function slideInFadeInTransition(slideAmount: number, toEndTime: number) {
    return transition('void => *', [
        animate(
            toEndTime,
            keyframes([
                style({
                    transform: `translateX(${slideAmount})`,
                    opacity: 0,
                    offset:0
                }),
                style({
                    transform: `translateX(${slideAmount*.75})`,
                    opacity: .25,
                    offset:.25
                }),
                style({
                    transform: `translateX(${slideAmount*.5})`,
                    opacity: 0.5,
                    offset:0.5
                }),
                style({
                    transform: `translateX(${slideAmount*.25})`,
                    opacity: 0.75,
                    offset:.75
                }),
                style({
                  transform: `translateX(0)`,
                  opacity: 1,
                  offset:1
              })
            ])
        )
    ]);
}
