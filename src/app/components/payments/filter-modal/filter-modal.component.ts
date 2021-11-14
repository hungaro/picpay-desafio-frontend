import { Component, Input } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

@Component({
    selector: 'filter-modal',
    templateUrl: './filter-modal.component.html',
    styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent {

    constructor(
        private _bottomSheet: MatBottomSheet
    ){}

    filter(filter: number): void {
        this._bottomSheet.dismiss(filter);
    }
}