import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {

  let service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [ HttpClientModule, RouterTestingModule],
        providers: [ AuthService] 
      });
    service = TestBed.inject(AuthService);
  });
  
  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should authenticate and return 1 element', inject([AuthService], (service: AuthService) => {
    
    // ARRANGE
    const EXPECTED_RETURN_1 = 1;

    // ACT
    service.authenticate("usuario@gmail.com", "usuario")
          .subscribe(
            (data) => {

              // ASSERT
              expect(data).toHaveSize(1);

            },
            (err) => {
              throw err;
            }
          );
  }));
  
});
