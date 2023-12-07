import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string) {
    const treatedCep = cep.replace(/\D/g, '');

    const validateCep = /^[0-9]{8}$/;

    if (validateCep.test(treatedCep)) {
      return this.http.get(`https://viacep.com.br/ws/${treatedCep}/json/`);
    }

    return null;
  }
}
