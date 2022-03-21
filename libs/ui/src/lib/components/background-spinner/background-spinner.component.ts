/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { initRotatePlus } from '../../animations/triggers/rotate.animation';
import { slideOutofViewTransition } from '../../animations/triggers/slide-outof-view.animation';

@Component({
    selector: 'ui-background-spinner',
    templateUrl: './background-spinner.component.html',
    animations: [
        initRotatePlus('rose-spin', 360, 60000, [
            slideOutofViewTransition(800, 2000)
        ])
    ]
})
export class BackgroundSpinnerComponent implements OnInit {
    @Input() image!: string;
    @Input() show = true;
    constructor() {}

    ngOnInit(): void {}
}
