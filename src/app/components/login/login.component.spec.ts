import { of } from "rxjs";
import { IAccount } from '../../interfaces/account.interface';
import { LoginComponent } from "./login.component";

describe('LoginComponent', () => {
    let component: LoginComponent;

    const account: Array<IAccount> = [{ email: 'usuario@gmail.com', id: 1, name: 'Phennie', password: 'usuario' }];
    let auth, router, snackBar, translate;

    beforeEach(() => {
        auth = jasmine.createSpyObj('AuthService', ['login']);
        router = jasmine.createSpyObj('Router', ['navigate']);
        snackBar = jasmine.createSpyObj('MatSnackBar', ['dismiss', 'open']);
        translate = jasmine.createSpyObj('TranslateService', ['instant']);

        auth.login.and.returnValue(of(account));

        component = new LoginComponent(auth, router, snackBar, translate);
    });

    it('should create the component', () => expect(component).toBeTruthy());

    it('valid logoPath', () => expect(component.logoPath).toEqual('../../../assets/images/logo.png'))

    it('should call the onSubmit method without access', () => {
        spyOn(component, 'openSnackBar')
        component.email = 'blins44@gmail.com';
        component.pwd = '123';

        component.onSubmit();

        expect(component.hasAccessByEmail).toBe(false);
        expect(component.hasAccessByPwd).toBe(false);
        expect(component.openSnackBar).toHaveBeenCalled()
    });

    it('should call the onSubmit method with access', () => {
        component.email = 'usuario@gmail.com';
        component.pwd = 'usuario';

        component.onSubmit();

        expect(component.hasAccessByEmail).toBe(true);
        expect(component.hasAccessByPwd).toBe(true);
        expect(snackBar.dismiss).toHaveBeenCalled()
        expect(router.navigate).toHaveBeenCalledWith(['/payments']);
    });

    it('should call the onSubmit method with email/pwd wrong', () => {
        spyOn(component, 'openSnackBar')
        component.email = 'usuario@gmail.com';
        component.pwd = '123';

        component.onSubmit();

        expect(component.hasAccessByEmail).toBe(true);
        expect(component.hasAccessByPwd).toBe(false);
        expect(component.openSnackBar).toHaveBeenCalled();
    });

    it('should call the openSnackBar method', () => {
        component.openSnackBar('mensagem que será exibida', 'ação do botão')

        expect(snackBar.open).toHaveBeenCalledWith('mensagem que será exibida', 'ação do botão')
    });
})