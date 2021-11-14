export interface IAccount {
    id: number,
    name: string;
    email: string;
    password: string;
}

export class Account implements IAccount {
    constructor(
        public id: number = 0,
        public name: string = '',
        public email: string = '',
        public password: string = ''
    ){}
}