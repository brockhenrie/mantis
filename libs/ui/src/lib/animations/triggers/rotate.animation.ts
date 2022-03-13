import {
    animate,
    AnimationTransitionMetadata,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export function rotate(
    itemName: string,
    amount: number,
    duration: number
): AnimationTriggerMetadata {
    return trigger(`${itemName}`, [
        state(
            'in',
            style({
                transform: 'rotate(0)'
            })
        ),
        state(
            'void',
            style({
                transform: `rotate(${amount}deg)`
            })
        ),
        transition('void => *', animate(duration))
    ]);
}

export function rotateTransition(amount: number, toEndTime: number) {
    return transition('void => *', [
        style({
            transform: `rotate(${amount}deg)`
        }),
        animate(toEndTime)
    ]);
}

export function initRotatePlus(
    itemName: string,
    amount: number,
    duration: number,
    transitions: AnimationTransitionMetadata[]
) {
    return trigger(`${itemName}`, [
        state('in', style({})),
        rotateTransition(amount, duration),
        ...transitions
    ]);
}
