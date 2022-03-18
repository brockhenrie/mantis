/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { fadeInSpinSlideOut } from '../../../animations/triggers/rotate.animation';

@Component({
    selector: 'ui-background-spinner',
    templateUrl: './background-spinner.component.html',
    animations: [
        fadeInSpinSlideOut('rose-spin', 360, 60000)
    ]
})
export class BackgroundSpinnerComponent implements OnInit {
    @Input() image!: string;
    @Input() show = true;
    @Input() state='spin';
    constructor() {}

    ngOnInit(): void {

    }


}
