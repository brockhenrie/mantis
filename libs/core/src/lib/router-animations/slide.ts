import {
    animate,
    group,
    query,
    style,
    transition,
    trigger
} from '@angular/animations';

export const slide = trigger('routeAnimations', [
    transition('* => toLeft', slideTo('left')),
    transition('* => toRight', slideTo('right')),
    transition('toRight => *', slideTo('left')),
    transition('toLeft => *', slideTo('right'))
]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        query(
            ':enter,:leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%'
                })
            ],
            optional
        ),
        query(':enter', [
            style({
                [direction]: '-100%'
            })
        ]),
        group([
            query(
                ':leave',
                [animate('600ms ease', style({ [direction]: '100%' }))],
                optional
            ),
            query(':enter', [
              animate('600ms ease', style({ [direction]: '0%' }))
          ]),
        ])
    ];
}
