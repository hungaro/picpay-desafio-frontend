import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 't-login',
  templateUrl: './t-login.component.html',
  styleUrls: ['./t-login.component.scss']
})
export class TLoginComponent implements OnInit {

  @Input() inputTextLoginFormLabel: string;
  @Input() inputPasswordLoginFormLabel: string;
  @Input() buttonLoginFormTitle: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() loginTitle: string;
  @Input() snackbarMessage: string;
  @Input() snackbarColor: string = '';

  @Output() loginFormButtonClicked: EventEmitter<any> = new EventEmitter();

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  buttonLoginForm() {
    this.loginFormButtonClicked.emit({ ...this.loginForm.value });
  }

}
