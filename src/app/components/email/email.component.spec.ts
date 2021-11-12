import { EmailComponent } from "./email.component";

describe('EmailComponent', () => {
  let component: EmailComponent;
  beforeEach(() => {
      component = new EmailComponent();
  });

  it('should create the email component', () => expect(component).toBeTruthy());

  it('should call the onTyping method and emit value true', () => {
    component.emailFormControl.patchValue('bruno@gmail.com')
    spyOn(component.value$, 'emit')

    component.onTyping();

    expect(component.value$.emit).toHaveBeenCalledWith('bruno@gmail.com')
  });

  it('should call the onTyping method and emit value null', () => {
    spyOn(component.value$, 'emit')

    component.onTyping();

    expect(component.value$.emit).toHaveBeenCalledWith(null)
  });

  it('should call the isValid method', () => {
    component.emailFormControl.patchValue('blins44@gmail.com')
    let res: boolean = component.isValid();
    expect(res).toBe(true);
  });
})
