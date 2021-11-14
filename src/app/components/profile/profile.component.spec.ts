import { ProfileComponent } from './profile.component';


describe('ProfileComponent' , () => {
    let component: ProfileComponent;
    let bottomSheet;
    beforeEach(() => {
        bottomSheet = jasmine.createSpyObj('MatBottomSheet', ['dismiss']);

        component = new ProfileComponent(bottomSheet);
    });

    it('should create the component', () => expect(component).toBeTruthy());

    it('should call the ngOnInit method', () => {
        expect(() => {
            component.ngOnInit();
        }).not.toThrow();
    });

    it('should call the onSave method', () => {
        component.pwd = '123';
        component.pwdConfirm = '123';
        component.onSave();

        expect(component.user.password).toBe('123');
        expect(component.dismatch).toBe(false);

        component.pwd = '1232';
        component.pwdConfirm = '123';
        component.onSave();
        expect(component.dismatch).toBe(true);
    });
})