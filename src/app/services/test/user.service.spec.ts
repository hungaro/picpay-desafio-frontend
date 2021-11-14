import { of } from "rxjs";
import { IAccount } from "../../interfaces/account.interface";
import { UserService } from '../user.service';

describe('UserService', () => {
    let service: UserService;
    let http;

    let user: IAccount = {
        id: 0,
        name: 'Bruno Lins',
        email: 'blins44@gmail.com',
        password: '123'
    }
    beforeEach(() => {
        http = jasmine.createSpyObj('HttpClient', ['put'])
        http.put.and.returnValue(of(user));

        service = new UserService(http);
    });

    it('should create service', () => expect(service).toBeTruthy());

    it('should test the edit method', () => {
        service.edit(user).subscribe({
            next: (res) => {
                expect(res).not.toBe(null);
            }
        })
    })
})