/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { FocusMonitor } from '@angular/cdk/a11y';
import {
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';

export interface FormFieldValue {
    query: string;
    scope: string;
}

@Component({
    selector: 'ui-custom-form-field-control',
    templateUrl: './custom-form-field-control.component.html',
    styleUrls: ['./custom-form-field-control.component.scss'],
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: CustomFormFieldControlComponent
        }
    ]
})
export class CustomFormFieldControlComponent
    implements OnInit, OnDestroy, MatFormFieldControl<FormFieldValue>
{
    static nextId = 0;
    @ViewChild(MatInput, { read: ElementRef, static: true })
    input!: ElementRef;

    @Input()
    set value(value: FormFieldValue) {
        this._value = value;
        this.stateChanges.next();
    }
    get value() {
        return this._value;
    }
    private _value: FormFieldValue = {
        query: '',
        scope: ''
    };
    stateChanges = new Subject<void>();

    @HostBinding()
    id = `custom-form-field-id-${CustomFormFieldControlComponent.nextId++}`;

    @Input()
    set placeholder(value: string) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    private _placeholder!: string;

    ngControl: NgControl | null = null;

    focused = true;

    get empty(): boolean {
        return !this.value.query && !this.value.scope;
    }

    @HostBinding('class.floated')
    get shouldLabelFloat(): boolean {
      return true;
   }

    @Input()
    required!: boolean;

    @Input()
    disabled = false;

    errorState = false;

    controlType = 'custom-form-field';

    @HostBinding('attr.aria-describedby') describedBy = '';

    constructor(private focusMonitor: FocusMonitor) {}

    setDescribedByIds(ids: string[]): void {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(): void {
        this.focusMonitor.focusVia(this.input, 'program');
    }

    ngOnInit(): void {
        this.focusMonitor.monitor(this.input).subscribe((focused) => {
            this.focused = !!focused;
            this.stateChanges.next();
        });
    }

    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.input);
        this.stateChanges.complete();
    }
}
