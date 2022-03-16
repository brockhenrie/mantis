import {
    AnimationTriggerMetadata,
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationTransitionMetadata
} from '@angular/animations';

export function slideIntoView(
    itemName: string,
    distance: number,
    toEndTime: number
): AnimationTriggerMetadata {
    return trigger(`${itemName}`, [
        state(
            'start',
            style({
                opacity: 0,
                transform: 'translateX(${distance})'
            })
        ),
        state('void', style({ transform: `translateX(${distance}px)` })),
        transition('void => *', animate(toEndTime))
    ]);
}
export function slideIntoViewTransition(
    distance: number,
    toEndTime: number
): AnimationTransitionMetadata {
    return transition(
        'void => *',
        animate(toEndTime, style({ transform: `translateX(${distance}px)` }))
    );
}
