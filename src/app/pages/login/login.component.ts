import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required]]
    });
  }

  get getControl(){
    return this.loginForm.controls;
  }
  
  fetchAccount(){
    this.authService.login(this.getControl.email.value, this.getControl.password.value).then(data => {      
      if(data?.error){
        Swal.fire({
          text: `${data.message}`,
          icon: 'error',
        })

        return;
      }
      
      this.router.navigate(['/pagamentos']);
    })
  }

}
