/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { rotateClockwise } from '../../animations/triggers/rotate-clockwise.animation';

@Component({
    selector: 'ui-background-spinner',
    templateUrl: './background-spinner.component.html',
    animations: [rotateClockwise('rose-spin', '720deg', 15000)]
})
export class BackgroundSpinnerComponent implements OnInit {
    @Input() image!: string;
    constructor() {}

    ngOnInit(): void {}
}
