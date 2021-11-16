import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {

  let profileService: ProfileService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule, RouterTestingModule],
        providers: [AuthService, ProfileService]
      });

    profileService = TestBed.inject(ProfileService);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', inject([ProfileService], (profileService: ProfileService) => {
    expect(profileService).toBeTruthy();
  }));

  it('should return UserProfile', inject([ProfileService, AuthService], async (profileService: ProfileService, authService: AuthService) => {

    // ARRANGE
    const email = "usuario@gmail.com";
    const password = "usuario";

    // ACT
    authService.authenticate(email, password)
      .subscribe(
        () => {
          const userProfile = profileService.getUserProfile();

          // ASSERT
          expect(userProfile.email).toEqual(email);
        }
      );

  }));
});
