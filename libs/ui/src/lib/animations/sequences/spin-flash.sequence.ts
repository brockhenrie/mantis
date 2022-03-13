import { transition, style, animate, keyframes } from '@angular/animations';

export function spinFlashTransitionAction(finishState:string,rotateAmount: number, toEndTime: number) {
    return transition(`start => ${finishState}`, [
        animate(
            toEndTime,
            keyframes([
                style({
                    transform: `rotate(${rotateAmount})`,
                    opacity: 1,
                    offset:0
                }),
                style({
                    transform: `rotate(${rotateAmount*.75}deg)`,
                    opacity: 0,
                    offset:.25
                }),
                style({
                    transform: `rotate(${rotateAmount*.5}deg)`,
                    opacity: 1,
                    offset:0.5
                }),
                style({
                    transform: `rotate(${rotateAmount*.25}deg)`,
                    opacity: 0,
                    offset:.75
                }),
                style({
                  transform: `rotate(0)`,
                  opacity: 1,
                  offset:1
              })
            ])
        )
    ]);
}

export function spinFlashTransition(rotateAmount: number, toEndTime: number) {
  return transition(`void => *`, [
      animate(
          toEndTime,
          keyframes([
              style({
                  transform: `rotate(0)`,
                  opacity: 1,
                  offset:0
              }),
              style({
                  transform: `rotate(${rotateAmount*.25}deg)`,
                  opacity: 0,
                  offset:.25
              }),
              style({
                  transform: `rotate(${rotateAmount*.5}deg)`,
                  opacity: 1,
                  offset:0.5
              }),
              style({
                  transform: `rotate(${rotateAmount*.75}deg)`,
                  opacity: 0,
                  offset:.75
              }),
              style({
                transform: `rotate(0)`,
                opacity: 1,
                offset:1
            })
          ])
      )
  ]);
}
