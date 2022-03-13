import {
    animate,
    AnimationTransitionMetadata,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export function slide(
  itemName: string,
  dir: 'left' | 'right',
  distance: number,
  sToFTime: number,
  fToSTime: number,
): AnimationTriggerMetadata {
    const slideDistance = getSlideDistance(dir,distance);
    return trigger(`${itemName}`, [
        state('start', style({ transform: `translateX(0)` })),
        // state(
        //     'finish',
        //     style({
        //         transform: `translateX(${SlideDirection[dir]}${distance})`
        //     })
        // ),
        slideStartTransition(slideDistance, sToFTime),
        slideStartTransition(slideDistance, fToSTime),
        // transition('start => finish', animate(toEndTime)),
        // transition('finish => start', animate(toBeginTime))
    ]);
}


export function initSlidePlus(
  itemName: string,
  dir: 'left' | 'right',
  distance: number,
  sToFTime: number,
  fToSTime: number,
  animations:AnimationTransitionMetadata[]
): AnimationTriggerMetadata {
  const slideDistance = `${SlideDirection[dir]}${Math.abs(distance)}`;
  slideDistance
  return trigger(`${itemName}`, [
      state('start', style({ transform: `translateX(0)` })),
      // state(
      //     'finish',
      //     style({
      //         transform: `translateX(${slideDistance})`
      //     })
      // ),
      slideStartTransition(slideDistance, sToFTime),
      slideStartTransition(slideDistance, fToSTime),
      // transition('start => finish', animate(sToFTime)),
      // transition('finish => start', animate(fToSTime)),
      ...animations
  ]);
}


export function slideStartTransition(
  distance: string | number,
  sToFTime: number
): AnimationTransitionMetadata {
  return transition(
      'start => finish',
      animate(sToFTime, style({ transform: `translateX(${distance}px)` }))
  );
}

export function slideFinishTransition(
  distance: number,
  fToSTime: number
): AnimationTransitionMetadata {
  return transition(
      'finish => start',
      animate(fToSTime, style({ transform: `translateX(${distance}px)` }))
  );
}




function getSlideDistance(dir:'left'|'right',distance:number){
  return `${SlideDirection[dir]}${Math.abs(distance)}`;
}




enum SlideDirection {
    'left' = '-',
    'right' = '+'
}
