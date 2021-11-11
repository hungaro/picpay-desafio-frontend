import { TextsButton } from 'src/app/shared/enums/texts-button';
import { IdialogFilter } from './../../../../shared/models/idialog-filter';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {

  public txtBtnCancel: string = TextsButton.cancel;
  public txtBtnFilter: string = TextsButton.filter;
  public txtBtnClean: string = 'LIMPAR FILTROS';
  public filterForm!: FormGroup;
  public filters!: IdialogFilter;
  public pipe = new DatePipe('pt-BR');

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdvancedFiltersComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.receiveData();
    this.validationForm();
  }

  validationForm() {
    this.filterForm = this.fb.group({
      value: [this.filters?.value ?? ''],
      date: [this.filters?.date? new Date(this.pipe.transform(this.filters?.date, 'yyyy-MM-dd') + 'T00:00:00.000') : ''],
      title: [this.filters?.title ?? ''],
      payed: [this.filters?.payed ?? '']
    })
  }

  receiveData(): void {
    if (this.data) {
      this.filters = this.data.filters;
    }
  }

  clean(): void {
    this.filterForm.reset();
    this.dialogRef.close(this.createObjectFilter());
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
      date: this.filterForm.get('date')?.value? this.pipe.transform(this.filterForm.get('date')?.value, 'yyyy-MM-dd') : null,
      title: this.filterForm.get('title')?.value ?? null,
      payed: this.filterForm.get('payed')?.value ?? null
    }
  }
}
