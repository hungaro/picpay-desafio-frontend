import { PasswordComponent } from "./password.component";

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  beforeEach(() => {
      component = new PasswordComponent();
  });

  it('should create the email component', () => expect(component).toBeTruthy());

  it('should call the onTyping method and emit value true', () => {
    component.pwdFormControl.patchValue('senha123')
    spyOn(component.value$, 'emit')

    component.onTyping();

    expect(component.value$.emit).toHaveBeenCalledWith('senha123')
  });

  it('should call the onTyping method and emit value null', () => {
    spyOn(component.value$, 'emit')

    component.onTyping();

    expect(component.value$.emit).toHaveBeenCalledWith(null)
  });

  it('should call the isValid method', () => {
    component.pwdFormControl.patchValue('senha321')
    let res: boolean = component.isValid();
    expect(res).toBe(true);
  });
})
