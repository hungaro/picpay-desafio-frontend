import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent {
    range: FormGroup;

    @Input() label: string = '';

    @Output('startDate') startDate$: EventEmitter<string> = new EventEmitter();
    @Output('endDate') endDate$: EventEmitter<string> = new EventEmitter();

    constructor(
        
    ) {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();

        this.range = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
        });
    }

    startDate(date: { value: Date }): void {
        let isoString;
        if(date.value){
            isoString = new Date(date.value.toString()).toISOString();
            this.startDate$.emit(isoString);
        }
    }

    endDate(date: { value: Date }): void {
        let isoString;
        if(date.value){
            isoString = new Date(date.value.toString()).toISOString();
            this.endDate$.emit(isoString);
        }
    }
}