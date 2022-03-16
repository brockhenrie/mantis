import {
    animate,
    AnimationTransitionMetadata,
    AnimationTriggerMetadata,
    group,
    keyframes,
    sequence,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { fadeInTransition } from './fade-in.animation';
import { slideOutofViewTransition } from './slide-outof-view.animation';

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

export function rotateTransitionSpin(amount: number, toEndTime: number) {
    return transition('spin <=> stop', [
        animate(
            toEndTime,
            style({
                transform: `rotate(${amount}deg)`
            })
        )
    ]);
}

export function initRotatePlus(
    itemName: string,
    amount: number,
    duration: number,
    transitions: AnimationTransitionMetadata[]
) {
    return trigger(`${itemName}`, [
        state(
            'void',
            style({
                opacity: 0
            })
        ),

        state(
            'spin',
            style({
                opacity: 1,
                // transform: `rotate(${amount}deg)`
                transform: `rotate(0deg)`
            })
        ),
        state(
            'stop',
            style({
                opacity: 1,
                transform: `rotate(0deg)`
            })
        ),

        rotateTransitionSpin(amount, duration),
        ...transitions
    ]);
}

export function fadeInSpinSlideOut(
    itemName: string,
    amount: number,
    duration: number
) {
    return trigger(`${itemName}`, [
        state(
            'void',
            style({
                opacity: 0
            })
        ),

        state(
            'spin',
            style({
                opacity: 1
                // transform: `rotate(${amount}deg)`
            })
        ),
        state(
            'stop',
            style({
                opacity: 1,
                transform: `rotate(0deg)`
            })
        ),
        transition(
            'void => *',
            group([
                animate(
                    2000,
                    style({ opacity: 1 })
                ),
                animate(duration, style({ transform: `rotate(${amount}deg)` }))
            ])
        ),
        rotateTransitionSpin(amount, duration),
        transition(
            '* => void',
            group([
                animate(1000, style({ opacity: 0 })),
                animate(2000, style({ transform: `translateY(800px)` }))
            ])
        )
    ]);
}
