import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BrazilianState } from '../models/brazilian-state';
import { Role } from '../models/role';
import { Technology } from '../models/technology';
import { NewsletterOp } from '../models/newsletter';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBrazilianStates(): Observable<BrazilianState[]> {
    return this.http.get('assets/data/brazilian-states.json') as Observable<
      BrazilianState[]
    >;
  }

  getRoles() {
    return [
      { name: 'Developer', lvl: 'Junior', description: 'beginner developer' },
      {
        name: 'Developer',
        lvl: 'Mid-level',
        description: 'mid level developer',
      },
      {
        name: 'Developer',
        lvl: 'Senior',
        description: 'experienced developer',
      },
    ] as Role[];
  }

  getTechnologies() {
    return [
      { name: 'Java', description: 'Java programming language' },
      { name: 'JavaScript', description: 'JavaScript programming language' },
      { name: 'PHP', description: 'PHP programming language' },
      { name: 'Ruby', description: 'Ruby programming language' },
    ] as Technology[];
  }

  getNewsletter() {
    return [
      { value: 'yes', description: 'Yes' },
      { value: 'no', description: 'No' },
    ] as NewsletterOp[];
  }

  getCities(acronym: string) {
    return this.http
      .get('assets/data/estados-cidades.json')
      .pipe(
        map(
          (data: any) =>
            data.estados.find((e: any) => e.sigla === acronym)
              .cidades as string[]
        )
      );
  }
}
