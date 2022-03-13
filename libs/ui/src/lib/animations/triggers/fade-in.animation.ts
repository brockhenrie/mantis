import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export function fadeIn(itemName:string,toEndTime:number):AnimationTriggerMetadata {
  return trigger(`${itemName}`, [
      state('start',style({
        opacity:0,
        transform: 'opacity(0)'}) ),
      state('void', style({transform: `translateX()`})),
      transition('void => *', animate(toEndTime)),
    ])
}




