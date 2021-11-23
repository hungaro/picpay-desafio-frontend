import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/**
 * Serviço de acesso ao backend
 */
@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    // Obter apenas um registro, baseado no ID
    public get<T>(path: string, id: string): Observable<T> {
        return this.http.get<T>('http://localhost:3000/' + path + '/' + id);
    }

    // Obter todos os registros da tabela
    public getAll(path: string): Observable<any> {
        return this.http.get('http://localhost:3000/' + path);
    }

    // Salvar um objeto no banco
    public save<T extends EntityBase>(path: string, entity: T): Observable<T> {
        // Caso possua um id, iremos realizar um update utilizando o patch
        if (entity.id) {
            return this.http.patch<T>('http://localhost:3000/' + path + '/' + entity.id.toString(), entity);
        }

        return this.http.post<T>('http://localhost:3000/' + path, entity);
    }

    // Excluir objetos do banco
    public delete(path: string, id: string): Observable<any> {
        return this.http.delete('http://localhost:3000/' + path + '/' + id);
    }
}

/**
 * Interface básica das entidades
 */
export interface EntityBase {
    id?: string;
}
