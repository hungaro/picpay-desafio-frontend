import { TextsButton } from 'src/app/shared/enums/texts-button';
import { Iuser } from 'src/app/shared/models/iuser';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IformIdentification } from 'src/app/shared/models/iform-identification';

@Component({
  selector: 'app-form-profile-identification',
  templateUrl: './form-profile-identification.component.html',
  styleUrls: ['./form-profile-identification.component.scss']
})
export class FormProfileIdentificationComponent implements OnInit {

  public identificationForm!: FormGroup;
  public txtBtn: string = TextsButton.save;
  @Input() user!: Iuser;
  @Input() disableBtn!: boolean;
  @Output() form = new EventEmitter<IformIdentification>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm() {
    this.identificationForm = this.fb.group({
      email: [this.user?.email ?? '', [Validators.required, Validators.email]],
      name: [this.user?.name ?? '', [Validators.required]]
    })
  }

  returnForm(): void {
    if(this.identificationForm.valid) {
      this.form.emit(this.identificationForm.getRawValue() as IformIdentification);
    }
  }
}
