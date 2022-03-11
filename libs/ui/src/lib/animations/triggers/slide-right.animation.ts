import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export function slideRight(itemName:string,distance:string,toEndTime:number,toBeginTime:number):AnimationTriggerMetadata {
  return trigger(`${itemName}`, [
      state('start',style({transform: 'translateX(0)'}) ),
      state('finish', style({transform: `translateX(${distance})`})),
      transition('start => finish', animate(toEndTime)),
      transition('finish => start', animate(toBeginTime))
    ])
}
