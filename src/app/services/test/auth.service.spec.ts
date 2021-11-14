import { of } from "rxjs";
import { Account, IAccount } from "../../interfaces/account.interface";
import { AuthService } from "../auth.service";

describe('AuthService', () => {
    let service: AuthService;
    let http;

    let account: IAccount[] = [{
        id:    1,
        name:   'Bruno Lins',
        email:   'blins44@gmail.com',
        password:   '123'
    }] 

    beforeEach(() => {
        http = jasmine.createSpyObj('HttpClient', ['get'])
        http.get.and.returnValue(of(account));
        service = new AuthService(http);
    });

    it('should create service', () => expect(service).toBeTruthy());

    it('should test the login method', () => {
        service.login().subscribe({
            next: (user: IAccount[]) => {
                expect(user).toEqual([{
                    id: 1,
                    email: 'blins44@gmail.com',
                    name: 'Bruno Lins',
                    password: '123'
                }]);
            }
        })
    })
})