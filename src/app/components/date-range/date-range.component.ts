import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent {
    range: FormGroup;

    @Input() label: string = '';
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

    onChange(date): void {
        console.log(date);
    }
}