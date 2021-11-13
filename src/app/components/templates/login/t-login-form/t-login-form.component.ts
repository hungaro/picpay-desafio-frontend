import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-login-form',
  templateUrl: './t-login-form.component.html',
  styleUrls: ['./t-login-form.component.scss']
})
export class TLoginFormComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

}
