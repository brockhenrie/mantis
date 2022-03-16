import {
    animate,
    group,
    query,
    style,
    transition,
    trigger
} from '@angular/animations';

export const transformer = function (x?: number, y?: number, rotate?: number) {
    const inputs = checkInput(x, y, rotate);
    return trigger('routeAnimations', [
        transition(
            '*=> isLeft',
            translateTo({ x: -inputs.x, y: -inputs.y, rotate: -inputs.rotate })
        ),
        transition(
            '*=> isRight',
            translateTo({ x: inputs.x, y: -inputs.y, rotate: inputs.rotate })
        ),
        // transition(
        //     'isRight=> *',
        //     translateTo({ x: -inputs.x, y: -inputs.y, rotate: inputs.rotate })
        // ),
        // transition(
        //     'isLeft=> *',
        //     translateTo({ x: inputs.x, y: -inputs.y, rotate: -inputs.rotate })
        // )
    ]);
};

function translateTo({ x = 100, y = 0, rotate = 0 }) {
    const optional = { optional: true };
    return [
        query(
            ':enter,:leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ],
            optional
        ),
        query(':enter', [
            style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
        ]),
        group([
            query(
                ':leave',
                [
                    animate(
                        '600ms ease-out',
                        style({
                            transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
                        })
                    )
                ],
                optional
            ),
            query(':enter', [
                animate(
                    '600ms ease-in',
                    style({
                        transform: `translate(0,0) rotate(0)`
                    })
                )
            ])
        ])
    ];
}

function checkInput(x?: number, y?: number, rotate?: number) {
    if (x === undefined) {
        x = 0;
    }

    if (y === undefined) {
        y = 0;
    }

    if (rotate === undefined) {
        rotate = 0;
    }

    return { x, y, rotate };
}
