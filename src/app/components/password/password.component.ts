import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  @Output('value') value$ = new EventEmitter<string>();

  constructor() { }

  pwdFormControl = new FormControl('', [Validators.required]);

  hide = true;

  onTyping(): void {
    if(this.isValid()){
      this.value$.emit(this.pwdFormControl.value)
    } else {
      this.value$.emit(null)
    }
  }

  isValid(): boolean {
    return !this.pwdFormControl.invalid
  }
}
