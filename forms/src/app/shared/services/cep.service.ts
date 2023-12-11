import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string): Observable<any> {
    const treatedCep = cep.replace(/\D/g, '');
    const validateCep = /^[0-9]{8}$/;

    if (validateCep.test(treatedCep)) {
      return this.http.get(`https://viacep.com.br/ws/${treatedCep}/json/`).pipe(
        catchError((error) => {
          return of({ error: 'Erro ao obter o CEP' });
        })
      );
    } else {
      return of({ error: 'CEP inválido' });
    }
  }
}
