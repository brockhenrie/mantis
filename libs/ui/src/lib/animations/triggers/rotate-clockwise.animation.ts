import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export function rotateClockwise(itemName:string,amount:string,duration:number):AnimationTriggerMetadata{
  return trigger(`${itemName}`, [
    state('in',style({
      transform: 'rotate(0)'
    })),
    state('void',style({
      transform: `rotate(${amount})`
    })),
    transition('void => *', animate(duration)),
  ])
}
