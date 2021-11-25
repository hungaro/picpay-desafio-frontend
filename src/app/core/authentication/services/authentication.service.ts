import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../../base-service/base-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService{

  constructor(http: HttpClient) { 
      super(
        http,
        environment.auth
      )
    }

    autorizeUser(value){
    value ? sessionStorage.setItem('access', 'authorized') : null
    }
}
