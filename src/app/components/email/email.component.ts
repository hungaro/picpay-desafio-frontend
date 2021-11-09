import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  @Output('value') value$ = new EventEmitter<string>();

  matcher = new MyErrorStateMatcher();

  onTyping(): void {
    if(this.isValid()){
      this.value$.emit(this.emailFormControl.value)
    } else {
      this.value$.emit(null)
    }
  }

  isValid(): boolean {
    return !this.emailFormControl.invalid
  }
}
