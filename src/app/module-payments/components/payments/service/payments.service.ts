import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base-service/base-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService extends BaseService {

  constructor(http: HttpClient) { 
    super(
      http,
      environment.server
    )
  }
}
