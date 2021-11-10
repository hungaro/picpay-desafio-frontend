import { IdialogFilter } from './../../../../shared/models/idialog-filter';
import { TextsButton } from './../../../../shared/enums/texts-button';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {

  public txtBtnCancel: string = TextsButton.cancel;
  public txtBtnFilter: string = TextsButton.filter;
  public filterForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdvancedFiltersComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm() {
    this.filterForm = this.fb.group({
      value: [ ''],
      date: [''],
      title: [ '']
    })
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  returnParameters(): void {
    this.dialogRef.close(this.createObjectFilter());
  }

  createObjectFilter(): IdialogFilter {
    return {
      value: this.filterForm.get('value')?.value ?? null,
      date: this.filterForm.get('date')?.value ?? null,
      title: this.filterForm.get('title')?.value ?? null,
    }
  }
}
