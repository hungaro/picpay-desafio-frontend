import { LoginComponent } from "./login.component";

describe('LoginComponent must', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});