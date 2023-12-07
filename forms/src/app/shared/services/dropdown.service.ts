import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrazilianState } from '../models/brazilian-state';
import { Role } from '../models/role';
import { Technology } from '../models/technology';

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
}
