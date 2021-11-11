import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextsButton } from 'src/app/shared/enums/texts-button';

@Component({
  selector: 'app-form-profile-password',
  templateUrl: './form-profile-password.component.html',
  styleUrls: ['./form-profile-password.component.scss']
})
export class FormProfilePasswordComponent implements OnInit {

  @Output() returnPassword = new EventEmitter<FormGroup>();
  @Input() disableBtn!: boolean;
  public passwordsForm!: FormGroup;
  public txtBtn: string = TextsButton.reset;
  public visible!: boolean;
  public visibleConfirmed!: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm(): void {
    this.passwordsForm = this.fb.group({
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.compare})
    });
  }

  compare(fbs: FormGroup): void {
    const confirmSenhaCtrl = fbs.get('confirmedPassword');
    if (confirmSenhaCtrl?.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
      if (fbs?.get('password')?.value !== confirmSenhaCtrl?.value) {
        fbs?.get('confirmedPassword')?.setErrors({ mismatch: true});
      } else {
        confirmSenhaCtrl?.setErrors(null);
      }
    }
  }

  return(): void {
    if(this.passwordsForm.valid) {
      this.returnPassword.emit(this.passwordsForm.get('passwords.password')?.value);
    }
  }
}
